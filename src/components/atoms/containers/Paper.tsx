import * as React from "react";
import styled from "styled-components";
import { ThemeContext, getStyles } from "~/styleConstants";

interface IPaperProps {
  color: string;
  boxShadow: string;
  borderRadius: string;
  children: React.ReactNode;
}

const StyledPaper = styled("div")<IPaperProps>`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${p => p.color};
  box-shadow: ${p => p.boxShadow};
  border-radius: ${p => p.borderRadius};
`;

export const Paper: React.SFC<IPaperProps> = ({ children }) => {
  const theme = React.useContext(ThemeContext);
  const {
    colors,
    boxShadow,
    border: { borderRadius }
  } = getStyles(theme);
  return (
    <StyledPaper
      color={colors.white}
      boxShadow={boxShadow.default}
      borderRadius={borderRadius.default}>
      {children}
    </StyledPaper>
  );
};
