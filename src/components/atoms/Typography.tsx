import * as React from "react";
import styled from "styled-components";
import { getStyles, ThemeContext, transitions } from "~/styleConstants";
import { Omit } from "~/typeUtilities";

export const Typography: React.SFC<TypographyProps> = ({
  align = "default",
  colorVariant = "default",
  sizeVariant = 3,
  weightVariant = 1,
  allowedUiStates = [],
  children,
  style
}) => {
  const theme = React.useContext(ThemeContext);
  const {
    colors,
    typography: { fontFamily, fontSizes, fontWeights }
  } = getStyles(theme);

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
  font-family: Roboto, sans-serif;
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
  colors: ReturnType<typeof getStyles>["colors"],
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "default":
    case "textPrimaryDark":
      return colors.gray.darker;
    case "textSecondaryDark":
      return colors.gray.main;
    case "textPrimaryLight":
      return colors.white;
    case "textSecondaryLight":
      return colors.gray.lightest;
    case "primary":
      return colors.primary.light;
    case "secondary":
      return colors.secondary.light;
    case "error":
      return colors.red.main;
    case "inherit":
      return "inherit";
  }
};

const getColorActive = (
  colors: ReturnType<typeof getStyles>["colors"],
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "default":
    case "textPrimaryDark":
      return colors.gray.darker;
    case "textSecondaryDark":
      return colors.gray.main;
    case "textPrimaryLight":
      return colors.white;
    case "textSecondaryLight":
      return colors.gray.lightest;
    case "primary":
      return colors.primary.dark;
    case "secondary":
      return colors.secondary.dark;
    case "error":
      return colors.red.main;
    case "inherit":
      return "inherit";
  }
};

const getColor = (
  colors: ReturnType<typeof getStyles>["colors"],
  color: ColorVariant | undefined = "default"
) => {
  switch (color) {
    case "default":
    case "textPrimaryDark":
      return colors.gray.darker;
    case "textSecondaryDark":
      return colors.gray.main;
    case "textPrimaryLight":
      return colors.white;
    case "textSecondaryLight":
      return colors.gray.lightest;
    case "primary":
      return colors.primary.main;
    case "secondary":
      return colors.secondary.main;
    case "error":
      return colors.red.main;
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
  fontSizes: ReturnType<typeof getStyles>["typography"]["fontSizes"],
  sizeVariant: SizeVariant
): string => {
  switch (sizeVariant) {
    case 1:
      return fontSizes[12];
    case 2:
      return fontSizes[14];
    default:
    case 3:
      return fontSizes[16];
    case 4:
      return fontSizes[18];
    case 5:
      return fontSizes[20];
    case 6:
      return fontSizes[24];
    case 7:
      return fontSizes[30];
    case 8:
      return fontSizes[36];
    case 9:
      return fontSizes[48];
    case 10:
      return fontSizes[60];
    case 11:
      return fontSizes[72];
  }
};

const getFontWeight = (
  fontWeights: ReturnType<typeof getStyles>["typography"]["fontWeights"],
  weightVariant: WeightVariant
) => {
  return fontWeights[weightVariant];
};
