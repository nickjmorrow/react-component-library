import { StyleConstant } from "../../../typeUtilities";
import { getColorFunc } from "../atomServices";
import { ColorVariant, StyleVariant, UIState } from "../types";

export const getBorderColor = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant,
  styleVariant: StyleVariant,
  uiState: UIState,
  isDisabled: boolean
): string => {
  switch (styleVariant) {
    case "primary":
    case "secondary":
      if (isDisabled) {
        return colors.neutral.cs5;
      }
      return getColorFunc(uiState)(colors, colorVariant);
    case "tertiary":
      return colors.transparent;
    default:
      throw new Error(`Unexpected styleVariant: ${styleVariant}`);
  }
};

export const getBackgroundColor = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant,
  styleVariant: StyleVariant,
  uiState: UIState,
  isDisabled: boolean
): string => {
  switch (styleVariant) {
    case "primary":
      if (isDisabled) {
        return colors.neutral.cs5;
      }
      return getColorFunc(uiState)(colors, colorVariant);
    case "secondary":
    case "tertiary":
      return colors.transparent;
  }
};

export const getColor = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant,
  styleVariant: StyleVariant,
  uiState: UIState,
  isDisabled: boolean
) => {
  switch (styleVariant) {
    case "primary":
      return colors.background;
    case "secondary":
    case "tertiary":
      if (isDisabled) {
        return colors.neutral.cs5;
      }
      return getColorFunc(uiState)(colors, colorVariant);
  }
};

export const noOp = () => {
  return;
};
