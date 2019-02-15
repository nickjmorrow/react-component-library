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
