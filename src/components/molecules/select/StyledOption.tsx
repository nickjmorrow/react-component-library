import styled from "styled-components";
import { StyleConstant } from "~/typeUtilities";
import { useThemeContext } from "~/styleConstants";
import * as React from "react";

export const StyledOption: React.FC<
  React.PropsWithoutRef<JSX.IntrinsicElements["div"]>
> = ({ ...props }) => {
  const {
    spacing,
    colors,
    transitions,
    border: { borderRadius }
  } = useThemeContext();
  return (
    <StyledOptionInternal
      spacing={spacing}
      colors={colors}
      transitions={transitions}
      borderRadius={borderRadius}
      {...props}
    />
  );
};

export const StyledOptionInternal = styled("div")<{
  spacing: StyleConstant<"spacing">;
  colors: StyleConstant<"colors">;
  transitions: StyleConstant<"transitions">;
  borderRadius: StyleConstant<"border">["borderRadius"];
}>`
  padding: ${({ spacing }) => spacing.ss3};
  cursor: pointer;
  transition: background-color ${p => p.transitions.fast};
  &:hover {
    background-color: ${p => p.colors.neutral.cs2};
    transition: background-color ${p => p.transitions.fast};
    border-radius: ${p => p.borderRadius.br1};
  }
`;
