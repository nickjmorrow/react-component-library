import { ColorVariant } from "./types";
import { StyleConstant } from "~/typeUtilities";

export const getColorHover = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "default":
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
    case "error":
      return colors.danger.main;
    case "inherit":
      return "inherit";
  }
};

export const getColorActive = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "default":
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
    case "error":
      return colors.danger.main;
    case "inherit":
      return "inherit";
  }
};

export const getColor = (
  colors: StyleConstant<"colors">,
  color: ColorVariant | undefined
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
    case "error":
      return colors.danger.main;
    case "inherit":
      return "inherit";
  }
};
