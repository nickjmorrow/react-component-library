import { StyleConstant } from "../../../typeUtilities";
import { getColorFunc } from "../atomServices";
import { ColorVariant, StyleVariant, UIState } from "../types";

export const getBorderColor = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant,
  styleVariant: StyleVariant,
  uiState: UIState
): string => {
  switch (styleVariant) {
    case "primary":
    case "secondary":
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
  uiState: UIState
): string => {
  switch (styleVariant) {
    case "primary":
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
  uiState: UIState
) => {
  switch (styleVariant) {
    case "primary":
      return colors.background;
    case "secondary":
    case "tertiary":
      return getColorFunc(uiState)(colors, colorVariant);
  }
};

export const noOp = () => {
  return;
};
