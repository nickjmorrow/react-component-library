import { ColorVariant } from "./types";

import { getStyles } from "~/styleConstants";

export const getColor = (
  colorVariant: ColorVariant,
  colors: ReturnType<typeof getStyles>["colors"]
) => {
  switch (colorVariant) {
    case "primaryLight":
      return colors.white;
    case "secondaryLight":
      return colors.gray.lightest;
    case "primaryDark":
      return colors.gray.darkest;
    default:
    case "secondaryDark":
      return colors.gray.dark;
  }
};

export const getColorHover = (
  colorVariant: ColorVariant,
  colors: ReturnType<typeof getStyles>["colors"]
) => {
  switch (colorVariant) {
    case "primaryDark":
      return colors.gray.dark;
    case "secondaryDark":
      return colors.gray.main;
    default:
      return getColor(colorVariant, colors);
  }
};
