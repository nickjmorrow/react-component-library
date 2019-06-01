import * as React from "react";
import styled from "styled-components";
import { useThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";
import { Collapse } from "react-collapse";

interface StyleApi {
	collapse?: React.CSSProperties;
}

export const StyledOptionList: React.FC<
  {
    children: React.ReactNode;
    numVisibleOptions?: number;
	isMenuVisible: boolean;
	styleApi?: StyleApi;
  } & React.PropsWithoutRef<JSX.IntrinsicElements["div"]>
> = ({ children, numVisibleOptions, isMenuVisible, styleApi = {}, ...props }) => {
  const { colors, spacing, border, boxShadow, transitions } = useThemeContext();
  return (
	  <Collapse style={styleApi.collapse} isOpened={isMenuVisible} springConfig={{ stiffness: 220 }}> 
    <StyledOptionListInternal
      colors={colors}
      spacing={spacing}
      border={border}
      boxShadow={boxShadow}
      transitions={transitions}
      numVisibleOptions={numVisibleOptions}
      {...props}
    >
      {children}
    </StyledOptionListInternal>
	</Collapse>
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
  border: ${p => p.border.borderStyle.bs1} ${p => p.colors.neutral.cs3};
  border-radius: ${p => p.border.borderRadius.br2};
  max-height: ${({ numVisibleOptions }) =>
    numVisibleOptions
      ? `${numVisibleOptions * OPTION_ELEMENT_HEIGHT}px`
      : "none"};
  overflow-y: ${({ numVisibleOptions }) =>
    numVisibleOptions ? "scroll" : "auto"};
`;

interface Props {
  numVisibleOptions?: number;
}
