import * as React from "react";
import styled, { css } from "styled-components";
import { Paper, ChevronUpIcon, getFormattedTextNode } from "../atoms";
import { ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";

export const ExpansionPanel: React.FC<{
  visibleContent: React.ReactNode;
  hiddenContent: React.ReactNode;
  isFullWidth?: boolean;
}> = ({ visibleContent, hiddenContent, isFullWidth = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleIsExpanded = () => setIsExpanded(prev => !prev);
  const { transitions, spacing } = React.useContext(ThemeContext);
  const paddingRef = React.useRef<HTMLDivElement>(null);
  const paddingHeight = paddingRef.current && paddingRef.current.clientHeight;

  return (
    <Paper
      style={{
        width: isFullWidth ? "100%" : "max-content"
      }}>
      <VisibleWrapper
        spacing={spacing}
        onClick={toggleIsExpanded}
        isFullWidth={isFullWidth}>
        {getFormattedTextNode(visibleContent)}
        <IconWrapper isExpanded={isExpanded} transitions={transitions}>
          <ChevronUpIcon />
        </IconWrapper>
      </VisibleWrapper>
      <HiddenWrapper
        transitions={transitions}
        isExpanded={isExpanded}
        spacing={spacing}
        height={paddingHeight!}
        isFullWidth={isFullWidth}>
        <Padding ref={paddingRef}>
          {getFormattedTextNode(hiddenContent)}
        </Padding>
      </HiddenWrapper>
    </Paper>
  );
};

const Padding = styled.div``;

const BaseWrapper = styled("div")<{
  spacing: StyleConstant<"spacing">;
  isFullWidth: boolean;
}>`
  min-width: ${p => p.spacing.ss48};
  height: auto;
  overflow: visible;
`;

const IconWrapper = styled("div")<{
  isExpanded: boolean;
  transitions: StyleConstant<"transitions">;
}>`
  transform: translateY(${p => (p.isExpanded ? -10 : 0)}%)
    rotate(${p => (p.isExpanded ? 180 : 0)}deg);
  height: 100%;
  transition-property: transform;
  transition-timing-function: ${p => p.transitions.transitionTimingFunction};
  transition-duration: ${p => p.transitions.durations.medium}ms;
`;

const VisibleWrapper = styled(BaseWrapper)<{
  spacing: StyleConstant<"spacing">;
}>`
  cursor: pointer;
  padding: ${p => p.spacing.ss4};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HiddenWrapper = styled(BaseWrapper)<{
  isExpanded?: boolean;
  transitions: StyleConstant<"transitions">;
  spacing: StyleConstant<"spacing">;
  height: number;
}>`
  transition-timing-function: ${p => p.transitions.transitionTimingFunction};
  transition-property: height, padding;
  height: ${p => p.height + "px"};
  transition-duration: ${p => p.transitions.durations.medium}ms;
  overflow: hidden;
  padding: ${({ spacing }) => `${spacing.ss4} ${spacing.ss4}`};
  ${p =>
    !p.isExpanded &&
    css`
      height: 0;
      overflow: hidden;
      padding: 0 ${p.spacing.ss4};
    `};
`;
