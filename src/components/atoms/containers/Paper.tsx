import * as React from "react";
import styled from "styled-components";
import { ThemeContext, getStyles } from "~/styleConstants";

interface IPaperProps {
  children: React.ReactNode;
  color?: string;
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

export const Paper: React.SFC<IPaperProps> = ({ children, color }) => {
  const { theme } = React.useContext(ThemeContext);
  const {
    colors,
    boxShadow,
    border: { borderRadius }
  } = getStyles(theme);
  return (
    <StyledPaper
      color={color || colors.background}
      boxShadow={boxShadow.default}
      borderRadius={borderRadius.default}>
      {children}
    </StyledPaper>
  );
};
