import { StyleConstant, ThemeContext } from "react-component-library";
import styled from "styled-components";
import * as React from "react";

export const Block: React.FC<{ color: string; boxShadow?: string }> = ({
  color,
  boxShadow: boxShadowOverride
}) => {
  const {
    spacing,
    border: { borderRadius },
    boxShadow
  } = React.useContext(ThemeContext);

  return (
    <StyledBlock
      color={color}
      spacing={spacing}
      borderRadius={borderRadius}
      boxShadow={boxShadowOverride || boxShadow.bs1}
    />
  );
};

const StyledBlock = styled("div")<{
  color: string;
  spacing: StyleConstant<"spacing">;
  borderRadius: StyleConstant<"border">["borderRadius"];
  boxShadow?: string;
}>`
  width: ${p => p.spacing.ss16};
  height: ${p => p.spacing.ss16};
  margin: ${p => `${p.spacing.ss2} ${p.spacing.ss4} ${p.spacing.ss2} 0`};
  margin: 0 12px 6px 0;
  border-radius: ${p => p.borderRadius.br1};
  background-color: ${props => props.color};
  box-shadow: ${p => p.boxShadow};
`;
