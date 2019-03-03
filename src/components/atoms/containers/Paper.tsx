import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../styleConstants";

interface IPaperProps {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}

interface DisplayProps {
  color: string;
  boxShadow: string;
  borderRadius: string;
}

const StyledPaper = styled("div")<DisplayProps>`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${p => p.color};
  box-shadow: ${p => p.boxShadow};
  border-radius: ${p => p.borderRadius};
`;

export const Paper: React.SFC<IPaperProps> = ({ children, color, style }) => {
  const {
    colors,
    boxShadow,
    border: { borderRadius }
  } = React.useContext(ThemeContext);
  return (
    <StyledPaper
      style={style}
      color={color || colors.background}
      boxShadow={boxShadow.bs1}
      borderRadius={borderRadius.br1}>
      {children}
    </StyledPaper>
  );
};
