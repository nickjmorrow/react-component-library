import styled from "styled-components";
import { Theme } from "../../../types";
import { StyleConstant } from "../../../typeUtilities";
import { IconDisplayProps, IconSizeVariant } from "./types";
import { CoreColorVariant } from "../types";

export const getColor = (
  colorVariant: CoreColorVariant,
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
    case "core":
      return colors.core.main;
    case "accent":
      return colors.accent.main;
  }
};

export const getColorHover = (
  colorVariant: CoreColorVariant,
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
