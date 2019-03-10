import styled from "styled-components";
import { StyleConstant } from "../../../typeUtilities";
import { ColorVariant } from "../types";
import { IconDisplayProps, IconSizeVariant } from "./types";

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
  height: ${p => getIconSize(p.sizeVariant, p.iconSizes)};
  width: ${p => getIconSize(p.sizeVariant, p.iconSizes)};
  color: ${p => getColor(p.colorVariant, p.colors)};
  transition: color ${p => p.transitions.medium};
  &:hover {
    color: ${p => getColorHover(p.colorVariant, p.colors)};
    transition: color ${p => p.transitions.medium};
  }
`;

export const getIconSize = (
  iconSizeVariant: IconSizeVariant,
  iconSizes: StyleConstant<"icons">["iconSizes"]
): string => {
  return iconSizes["is" + iconSizeVariant];
};
