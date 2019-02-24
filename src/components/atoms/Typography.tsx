import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "~/styleConstants";
import { Omit, StyleConstant } from "~/typeUtilities";

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

const getColorHover = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "default":
    case "textPrimaryDark":
      return colors.neutral.darkest;
    case "textSecondaryDark":
      return colors.neutral.darker;
    case "textPrimaryLight":
      return colors.background;
    case "textSecondaryLight":
      return colors.neutral.lightest;
    case "primary":
      return colors.core.light;
    case "secondary":
      return colors.accent.light;
    case "error":
      return colors.danger.main;
    case "inherit":
      return "inherit";
  }
};

const getColorActive = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "default":
    case "textPrimaryDark":
      return colors.neutral.darker;
    case "textSecondaryDark":
      return colors.neutral.main;
    case "textPrimaryLight":
      return colors.background;
    case "textSecondaryLight":
      return colors.neutral.lightest;
    case "primary":
      return colors.core.dark;
    case "secondary":
      return colors.accent.dark;
    case "error":
      return colors.danger.main;
    case "inherit":
      return "inherit";
  }
};

const getColor = (
  colors: StyleConstant<"colors">,
  color: ColorVariant | undefined = "default"
) => {
  switch (color) {
    case "default":
    case "textPrimaryDark":
      return colors.neutral.darker;
    case "textSecondaryDark":
      return colors.neutral.main;
    case "textPrimaryLight":
      return colors.background;
    case "textSecondaryLight":
      return colors.neutral.lightest;
    case "primary":
      return colors.core.main;
    case "secondary":
      return colors.accent.main;
    case "error":
      return colors.danger.main;
    case "inherit":
      return "inherit";
  }
};

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

export type ColorVariant =
  | "default"
  | "error"
  | "primary"
  | "secondary"
  | "textPrimaryDark"
  | "textSecondaryDark"
  | "textPrimaryLight"
  | "textSecondaryLight"
  | "inherit";
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
