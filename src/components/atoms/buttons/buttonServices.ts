import { StyleConstant } from "../../../typeUtilities";
import { ButtonColorVariant } from "./types";
import { ColorSet, StyleVariant, ColorState } from "../types";
import { getColor, getColorHover, getColorActive } from "../typography";

export const getBorderColorState = (
  colors: StyleConstant<"colors">,
  colorVariant: ButtonColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
): ColorState => ({
  normal: getBorderColor(colors, colorVariant, colorSet, styleVariant),
  hover: getBorderColorHover(colors, colorVariant, colorSet, styleVariant),
  active: getBorderColorActive(colors, colorVariant, colorSet, styleVariant)
});

const getBorderColor = (
  colors: StyleConstant<"colors">,
  colorVariant: ButtonColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
): string => {
  switch (styleVariant) {
    case "primary":
      return getBackgroundColor(colors, colorVariant, colorSet, styleVariant);
    case "secondary":
      return getColor(colors, colorVariant);
    case "tertiary":
      return colors.transparent;
    default:
      throw new Error(`Unexpected styleVariant: ${styleVariant}`);
  }
};

const getBorderColorHover = (
  colors: StyleConstant<"colors">,
  colorVariant: ButtonColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
): string => {
  switch (styleVariant) {
    case "primary":
      return getBackgroundColorHover(
        colors,
        colorVariant,
        colorSet,
        styleVariant
      );
    case "secondary":
      return getColorHover(colors, colorVariant);
    case "tertiary":
      return colors.transparent;
    default:
      throw new Error(`Unexpected styleVariant: ${styleVariant}`);
  }
};

const getBorderColorActive = (
  colors: StyleConstant<"colors">,
  colorVariant: ButtonColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
): string => {
  switch (styleVariant) {
    case "primary":
      return getBackgroundColorActive(
        colors,
        colorVariant,
        colorSet,
        styleVariant
      );
    case "secondary":
      return getColorActive(colors, colorVariant);
    case "tertiary":
      return colors.transparent;
    default:
      throw new Error(`Unexpected styleVariant: ${styleVariant}`);
  }
};

export const getBackgroundColorState = (
  colors: StyleConstant<"colors">,
  colorVariant: ButtonColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
): ColorState => ({
  normal: getBackgroundColor(colors, colorVariant, colorSet, styleVariant),
  hover: getBackgroundColorHover(colors, colorVariant, colorSet, styleVariant),
  active: getBackgroundColorActive(colors, colorVariant, colorSet, styleVariant)
});

const getBackgroundColorActive = (
  colors: StyleConstant<"colors">,
  colorVariant: ButtonColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
) => {
  if (styleVariant === "secondary" || styleVariant === "tertiary") {
    return colorSet.colorActive || colors.transparent;
  }
  if (colorSet.backgroundColorActive) {
    return colorSet.backgroundColorActive;
  }
  switch (colorVariant) {
    case "core":
      return colors.core.dark;
    case "accent":
      return colors.accent.dark;
    case "success":
      return colors.success.dark;
    case "warning":
      return colors.warning.dark;
    case "danger":
      return colors.danger.dark;
  }
};

const getBackgroundColor = (
  colors: StyleConstant<"colors">,
  colorVariant: ButtonColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
): string => {
  if (styleVariant === "secondary" || styleVariant === "tertiary") {
    return colorSet.color || colors.transparent;
  }

  if (colorSet.backgroundColor) {
    return colorSet.backgroundColor;
  }

  switch (colorVariant) {
    case "core":
      return colors.core.main;
    case "accent":
      return colors.accent.main;
    case "success":
      return colors.success.main;
    case "warning":
      return colors.warning.main;
    case "danger":
      return colors.danger.main;
  }
};

const getBackgroundColorHover = (
  colors: StyleConstant<"colors">,
  variant: ButtonColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
) => {
  if (styleVariant === "secondary" || styleVariant === "tertiary") {
    return colorSet.colorHover || colors.transparent;
  }
  if (colorSet.backgroundColorHover) {
    return colorSet.backgroundColorHover;
  }
  switch (variant) {
    case "core":
      return colors.core.light;
    case "accent":
      return colors.accent.light;
    case "success":
      return colors.success.light;
    case "warning":
      return colors.warning.light;
    case "danger":
      return colors.danger.light;
  }
};
