import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "~/styleConstants";
import { Omit, StyleConstant } from "~/typeUtilities";
import { ColorVariant } from "./types";
import { getColorActive, getColor, getColorHover } from "./typographyServices";

export const Typography: React.SFC<TypographyProps> = ({
  align = "default",
  colorVariant = "default",
  sizeVariant = 3,
  weightVariant = 1,
  allowedUiStates = [],
  children,
  style
}) => {
  const {
    colors,
    transitions,
    typography: { fontFamily, fontSizes, fontWeights }
  } = React.useContext(ThemeContext);

  const colorActive =
    allowedUiStates.find(aus => aus === "active") !== undefined
      ? getColorActive(colors, colorVariant)
      : getColor(colors, colorVariant);
  const colorHover =
    allowedUiStates.find(aus => aus === "active") !== undefined
      ? getColorHover(colors, colorVariant)
      : getColor(colors, colorVariant);

  return (
    <StyledTypography
      color={getColor(colors, colorVariant)}
      colorActive={colorActive}
      colorHover={colorHover}
      align={align}
      fontFamily={fontFamily.default}
      transition={transitions.fast}
      fontSize={getFontSize(fontSizes, sizeVariant)}
      fontWeight={getFontWeight(fontWeights, weightVariant)}
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
  &:hover {
    color: ${p => p.colorHover};
    transition: color ${p => p.transition};
  }
  &:active {
    color: ${p => p.colorActive};
    transition: color ${p => p.transition};
  }
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
}

interface TypographyProps {
  align?: Align;
  sizeVariant?: SizeVariant;
  colorVariant?: ColorVariant;
  weightVariant?: WeightVariant;
  children: React.ReactNode;
  style?: React.CSSProperties;
  uiState?: UiState;
  allowedUiStates?: UiState[];
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
