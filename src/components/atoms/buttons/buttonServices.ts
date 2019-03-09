import { StyleConstant } from "../../../typeUtilities";
import { getColor, getColorActive, getColorHover } from "../atomServices";
import { ColorSet, ColorState, ColorVariant, StyleVariant } from "../types";

export const getBorderColorState = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
): ColorState => ({
  normal: getBorderColor(colors, colorVariant, colorSet, styleVariant),
  hover: getBorderColorHover(colors, colorVariant, colorSet, styleVariant),
  active: getBorderColorActive(colors, colorVariant, colorSet, styleVariant)
});

const getBorderColor = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant,
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
  colorVariant: ColorVariant,
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
  colorVariant: ColorVariant,
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
  colorVariant: ColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
): ColorState => ({
  normal: getBackgroundColor(colors, colorVariant, colorSet, styleVariant),
  hover: getBackgroundColorHover(colors, colorVariant, colorSet, styleVariant),
  active: getBackgroundColorActive(colors, colorVariant, colorSet, styleVariant)
});

const getBackgroundColorActive = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
) => {
  if (styleVariant === "secondary" || styleVariant === "tertiary") {
    return colorSet.colorActive || colors.transparent;
  }
  if (colorSet.backgroundColorActive) {
    return colorSet.backgroundColorActive;
  }
  return getColorActive(colors, colorVariant);
};

const getBackgroundColor = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
): string => {
  if (styleVariant === "secondary" || styleVariant === "tertiary") {
    return colorSet.color || colors.transparent;
  }

  if (colorSet.backgroundColor) {
    return colorSet.backgroundColor;
  }

  return getColor(colors, colorVariant);
};

const getBackgroundColorHover = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant,
  colorSet: Partial<ColorSet>,
  styleVariant: StyleVariant
) => {
  if (styleVariant === "secondary" || styleVariant === "tertiary") {
    return colorSet.colorHover || colors.transparent;
  }
  if (colorSet.backgroundColorHover) {
    return colorSet.backgroundColorHover;
  }
  return getColorHover(colors, colorVariant);
};
