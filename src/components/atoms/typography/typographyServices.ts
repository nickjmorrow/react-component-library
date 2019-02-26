import { StyleConstant } from "~/typeUtilities";
import { CoreColorVariant } from "../types";

export const getColorHover = (
  colors: StyleConstant<"colors">,
  colorVariant: CoreColorVariant
) => {
  switch (colorVariant) {
    case "primaryDark":
      return colors.neutral.darkest;
    case "secondaryDark":
      return colors.neutral.darker;
    case "primaryLight":
      return colors.background;
    case "secondaryLight":
      return colors.neutral.lightest;
    case "core":
      return colors.core.light;
    case "accent":
      return colors.accent.light;
  }
};

export const getColorActive = (
  colors: StyleConstant<"colors">,
  colorVariant: CoreColorVariant
) => {
  switch (colorVariant) {
    case "primaryDark":
      return colors.neutral.darker;
    case "secondaryDark":
      return colors.neutral.main;
    case "primaryLight":
      return colors.background;
    case "secondaryLight":
      return colors.neutral.lightest;
    case "core":
      return colors.core.dark;
    case "accent":
      return colors.accent.dark;
  }
};

export const getColor = (
  colors: StyleConstant<"colors">,
  color: CoreColorVariant
) => {
  switch (color) {
    default:
    case "primaryDark":
      return colors.neutral.darker;
    case "secondaryDark":
      return colors.neutral.main;
    case "primaryLight":
      return colors.background;
    case "secondaryLight":
      return colors.neutral.lightest;
    case "core":
      return colors.core.main;
    case "accent":
      return colors.accent.main;
  }
};
