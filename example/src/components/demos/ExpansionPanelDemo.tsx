import * as React from "react";
import { Paper, ThemeContext, StyleConstant } from "react-component-library";
import styled, { css } from "styled-components";
import { getPlaceholderText } from "src/services";

export const ExpansionPanelDemo: React.FC = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleIsExpanded = () => setIsExpanded(prev => !prev);
  const { transitions } = React.useContext(ThemeContext);
  return (
    <Paper>
      <VisibleWrapper onClick={toggleIsExpanded}>Expansion Text</VisibleWrapper>
      <Wrapper transitions={transitions} isExpanded={isExpanded}>
        <div>{getPlaceholderText()}</div>
      </Wrapper>
    </Paper>
  );
};

const BaseWrapper = styled.div`
  min-width: 200px;
  padding: 16px;
  height: auto;
  overflow: visible;
`;

const VisibleWrapper = styled(BaseWrapper)`
  cursor: pointer;
`;

const Wrapper = styled(BaseWrapper)<{
  isExpanded?: boolean;
  transitions: StyleConstant<"transitions">;
}>`
  min-width: 200px;
  transition-timing-function: ${p => p.transitions.transitionTimingFunction};
  transition-property: height, overflow, padding;
  transition-duration: ${p => p.transitions.durations.medium}ms;
  ${p =>
    p.isExpanded
      ? css``
      : css`
          padding: 0 16px 0 16px;
          height: 0px;
          overflow: hidden;
        `};
`;
