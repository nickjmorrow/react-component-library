import { ThemeInput } from "../types";
import { boxShadowOffsets, colorConstants, fontFamily } from "./styleConstants";
import {
  generateColorShades,
  getBorderRadius,
  getBorderStyle,
  getFontSize,
  getFontWeight,
  getIconSize,
  getSpacingSystem,
  getBoxShadow,
  getTransitions
} from "./styleProviders";
import {
  defaultIconColorVariant,
  defaultIconSizeVariant
} from "./styleVariants";

export const getTheme = (themeInputs: ThemeInput) => ({
  colors: {
    background: colorConstants.background,
    transparent: colorConstants.transparent,
    core: generateColorShades(themeInputs.colors.core),
    accent: generateColorShades(themeInputs.colors.accent),
    neutral: generateColorShades(themeInputs.colors.neutral),
    success: generateColorShades(themeInputs.colors.success),
    warning: generateColorShades(themeInputs.colors.warning),
    danger: generateColorShades(themeInputs.colors.danger)
  },
  transitions: getTransitions(themeInputs.transitions),
  boxShadow: getBoxShadow(boxShadowOffsets, themeInputs.colors.neutral),
  border: {
    borderRadius: getBorderRadius(themeInputs.border.borderRadius),
    borderStyle: getBorderStyle(themeInputs.border.borderStyle)
  },
  typography: {
    fontSizes: getFontSize(themeInputs.typography.fontSizes),
    fontFamily,
    fontWeights: getFontWeight(themeInputs.typography.fontWeights)
  },
  spacing: getSpacingSystem(themeInputs.spacing),
  icons: {
    iconSizes: getIconSize(themeInputs.icons.iconSizes),
    defaultIconSizeVariant,
    defaultIconColorVariant
  }
});
