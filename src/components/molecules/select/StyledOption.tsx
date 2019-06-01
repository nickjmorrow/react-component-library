import styled from "styled-components";
import { StyleConstant } from "~/typeUtilities";
import { useThemeContext } from "~/styleConstants";
import * as React from "react";

export const StyledOption: React.FC<
  React.PropsWithoutRef<JSX.IntrinsicElements["div"]> & Props
> = ({ isSelected = false, ...props }) => {
  const { spacing, colors, transitions } = useThemeContext();
  return (
    <StyledOptionInternal
      spacing={spacing}
      colors={colors}
      transitions={transitions}
      isSelected={isSelected}
      {...props}
    />
  );
};

export const StyledOptionInternal = styled("div")<
  {
    spacing: StyleConstant<"spacing">;
    colors: StyleConstant<"colors">;
    transitions: StyleConstant<"transitions">;
  } & Required<Props>
>`
  padding: ${({ spacing }) => spacing.ss3};
  cursor: pointer;
  z-index: 1;
  background-color: ${p =>
    p.isSelected ? p.colors.neutral.cs3 : p.colors.background};
  transition: background-color ${p => p.transitions.fast};
  &:hover {
    background-color: ${p =>
      p.isSelected ? p.colors.neutral.cs3 : p.colors.neutral.cs2};
    transition: background-color ${p => p.transitions.fast};
  }
`;

interface Props {
  isSelected?: boolean;
}
