import * as React from "react";
import styled from "styled-components";
import { useThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";

export const StyledOptionList: React.FC<
  { children: React.ReactNode } & React.PropsWithoutRef<
    JSX.IntrinsicElements["div"]
  >
> = ({ children, ...props }) => {
  const { colors, spacing, border, boxShadow, transitions } = useThemeContext();
  return (
    <StyledOptionListInternal
      colors={colors}
      spacing={spacing}
      border={border}
      boxShadow={boxShadow}
      transitions={transitions}
      {...props}>
      {children}
    </StyledOptionListInternal>
  );
};

const StyledOptionListInternal = styled("div")<{
  colors: StyleConstant<"colors">;
  spacing: StyleConstant<"spacing">;
  border: StyleConstant<"border">;
  boxShadow: StyleConstant<"boxShadow">;
  transitions: StyleConstant<"transitions">;
}>`
  background-color: ${p => p.colors.background};
  width: inherit;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  box-shadow: ${p => p.boxShadow.bs1};
  border-radius: ${p => p.border.borderRadius.br2};
  transition: box-shadow ${p => p.transitions.slow};
  &:hover {
    box-shadow: ${p => p.boxShadow.bs2};
    transition: box-shadow ${p => p.transitions.slow};
  }
`;
