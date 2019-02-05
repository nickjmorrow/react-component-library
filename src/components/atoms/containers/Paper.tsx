import * as React from "react";
import styled from "styled-components";
import { borderRadius, boxShadow, colors } from "../../../styleConstants";

interface IPaperProps {
  minHeight?: number;
  minWidth?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const StyledPaper = styled("div")<IPaperProps>`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${colors.white};
  box-shadow: ${boxShadow.default};
  border-radius: ${borderRadius.inner};
  min-width: ${props => props.minWidth}px;
  min-height: ${props => props.minHeight}px;
`;

export const Paper: React.SFC<IPaperProps> = ({
  style,
  minHeight = 0,
  minWidth = 0,
  children
}) => (
  <StyledPaper style={style} minHeight={minHeight} minWidth={minWidth}>
    {children}
  </StyledPaper>
);
