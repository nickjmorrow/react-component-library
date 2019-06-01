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
> = ({ children, numVisibleOptions, isMenuVisible, styleApi = { collapse: {} }, ...props }) => {
  const { colors, spacing, border: { borderRadius }, boxShadow, transitions } = useThemeContext();
  const defaultCollapseStyle = {
	  boxShadow: boxShadow.bs1,
	  borderRadius: borderRadius.br1,
	  backgroundColor: colors.background
  }
  const collapseStyle={...defaultCollapseStyle, ...styleApi.collapse};
  return (
	  <Collapse style={collapseStyle} isOpened={isMenuVisible} springConfig={{ stiffness: 220 }}> 
    <StyledOptionListInternal
      colors={colors}
      spacing={spacing}
      borderRadius={borderRadius}
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
    borderRadius: StyleConstant<"border">['borderRadius'];
    boxShadow: StyleConstant<"boxShadow">;
    transitions: StyleConstant<"transitions">;
  } & Props
>`
  background-color: ${p => p.colors.background};
  width: inherit;
  display: flex;
  flex-direction: column;
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
