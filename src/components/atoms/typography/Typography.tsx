import * as React from "react";
import styled, { css } from "styled-components";
import { ThemeContext } from "../../../styleConstants";
import { Omit, StyleConstant } from "../../../typeUtilities";
import { getColor, getColorActive, getColorHover } from "./typographyServices";
import { CoreColorVariant, ColorSet } from "../../atoms/types";

export const Typography: React.SFC<TypographyProps> = ({
  align = "default",
  colorVariant = "primaryDark",
  sizeVariant = 3,
  weightVariant = 1,
  colorSet = {} as ColorSet,
  children,
  isInteractive = false,
  style
}) => {
  const {
    colors,
    transitions,
    typography: { fontFamily, fontSizes, fontWeights }
  } = React.useContext(ThemeContext);

  return (
    <StyledTypography
      color={colorSet.color || getColor(colors, colorVariant)}
      colorActive={colorSet.colorActive || getColorActive(colors, colorVariant)}
      colorHover={colorSet.colorHover || getColorHover(colors, colorVariant)}
      align={align}
      fontFamily={fontFamily.default}
      transition={transitions.fast}
      fontSize={getFontSize(fontSizes, sizeVariant)}
      fontWeight={getFontWeight(fontWeights, weightVariant)}
      isInteractive={isInteractive}
      style={style}>
      {children}
    </StyledTypography>
  );
};

export const StyledTypography = styled("span")<DisplayProps>`
  display: inline-block;
  font-family: ${p => p.fontFamily};
  text-align: ${p => p.align};
  color: ${p => p.color};
  font-size: ${p => p.fontSize};
  font-weight: ${p => p.fontWeight};
  ${p =>
    p.isInteractive &&
    css<DisplayProps>`
      &:hover {
        color: ${p => p.colorHover};
        transition: color ${p => p.transition};
      }
      &:active {
        color: ${p => p.colorActive};
        transition: color ${p => p.transition};
      }
    `}
`;

export const formattedTextNode = (
  textNode: React.ReactNode,
  props: Omit<TypographyProps, "children"> = {}
): React.ReactNode =>
  typeof textNode === "string" ? (
    <Typography {...props}>{textNode}</Typography>
  ) : (
    textNode
  );

type UiState = "hover" | "active";

type Align = "inherit" | "left" | "center" | "right" | "justify" | "default";
type SizeVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type WeightVariant = 1 | 2 | 3 | 4 | 5;

interface DisplayProps {
  color: string;
  align: string;
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  transition: string;
  colorHover: string;
  colorActive: string;
  isInteractive: boolean;
}

interface TypographyProps {
  align?: Align;
  sizeVariant?: SizeVariant;
  colorVariant?: CoreColorVariant;
  weightVariant?: WeightVariant;
  children: React.ReactNode;
  style?: React.CSSProperties;
  uiState?: UiState;
  colorSet?: Partial<ColorSet>;
  allowedUiStates?: UiState[];
  someProp?: boolean;
  isInteractive?: boolean;
}

// helpers
const getFontSize = (
  fontSizes: StyleConstant<"typography">["fontSizes"],
  sizeVariant: SizeVariant
): string => {
  return fontSizes[("fs" + sizeVariant) as keyof typeof fontSizes];
};

const getFontWeight = (
  fontWeights: StyleConstant<"typography">["fontWeights"],
  weightVariant: WeightVariant
) => {
  return fontWeights["fw" + weightVariant];
};
