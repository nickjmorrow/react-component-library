import styled from "styled-components";
import { Theme } from "~/index";
import { StyleConstant } from "~/typeUtilities";
import { IconDisplayProps, IconSizeVariant, IconColorVariant } from "./types";

export const getColor = (
  colorVariant: IconColorVariant,
  colors: StyleConstant<"colors">
) => {
  switch (colorVariant) {
    case "primaryLight":
      return colors.background;
    case "secondaryLight":
      return colors.neutral.lightest;
    case "primaryDark":
      return colors.neutral.darkest;
    default:
    case "secondaryDark":
      return colors.neutral.dark;
  }
};

export const getColorHover = (
  colorVariant: IconColorVariant,
  colors: StyleConstant<"colors">
) => {
  switch (colorVariant) {
    case "primaryDark":
      return colors.neutral.dark;
    case "secondaryDark":
      return colors.neutral.main;
    default:
      return getColor(colorVariant, colors);
  }
};

export const DefaultIconSvg = styled("svg")<IconDisplayProps>`
  height: ${p => p.size};
  width: ${p => p.size};
  color: ${p => p.color};
`;

export const getIconSize = (
  iconSizeVariant: IconSizeVariant
): keyof Theme["icons"]["iconSizes"] =>
  `is${iconSizeVariant}` as keyof Theme["icons"]["iconSizes"];
