import * as React from "react";
import styled from "styled-components";
import { useThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";

export const StyledOptionList: React.FC<
  {
    children: React.ReactNode;
    numVisibleOptions?: number;
  } & React.PropsWithoutRef<JSX.IntrinsicElements["div"]>
> = ({ children, numVisibleOptions, ...props }) => {
  const { colors, spacing, border, boxShadow, transitions } = useThemeContext();
  return (
    <StyledOptionListInternal
      colors={colors}
      spacing={spacing}
      border={border}
      boxShadow={boxShadow}
      transitions={transitions}
      numVisibleOptions={numVisibleOptions}
      {...props}>
      {children}
    </StyledOptionListInternal>
  );
};

const OPTION_ELEMENT_HEIGHT = 51;

const StyledOptionListInternal = styled("div")<
  {
    colors: StyleConstant<"colors">;
    spacing: StyleConstant<"spacing">;
    border: StyleConstant<"border">;
    boxShadow: StyleConstant<"boxShadow">;
    transitions: StyleConstant<"transitions">;
  } & Props
>`
  background-color: ${p => p.colors.background};
  width: inherit;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  box-shadow: ${p => p.boxShadow.bs1};
  border-radius: ${p => p.border.borderRadius.br2};
  transition: box-shadow ${p => p.transitions.slow};
  height: ${({ numVisibleOptions }) =>
    numVisibleOptions
      ? `${numVisibleOptions * OPTION_ELEMENT_HEIGHT}px`
      : "auto"};
  overflow-y: ${({ numVisibleOptions }) =>
    numVisibleOptions ? "scroll" : "auto"};
  &:hover {
    box-shadow: ${p => p.boxShadow.bs2};
    transition: box-shadow ${p => p.transitions.slow};
  }
`;

interface Props {
  numVisibleOptions?: number;
}
