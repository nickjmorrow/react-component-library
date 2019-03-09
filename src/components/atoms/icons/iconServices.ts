import styled from "styled-components";
import { Theme } from "../../../types";
import { StyleConstant } from "../../../typeUtilities";
import { IconDisplayProps, IconSizeVariant } from "./types";
import { ColorVariant } from "../types";

export const getColor = (
  colorVariant: ColorVariant,
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
    case "success":
      return colors.success.main;
    case "warning":
      return colors.warning.main;
    case "danger":
      return colors.danger.main;
  }
};

export const getColorHover = (
  colorVariant: ColorVariant,
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
