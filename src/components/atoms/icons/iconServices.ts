import styled from "styled-components";
import { StyleConstant } from "~/typeUtilities";
import { IconDisplayProps } from "./types";

export const getColor = (
  colorVariant: StyleConstant<"icons">["defaultIconColorVariant"],
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
  colorVariant: StyleConstant<"icons">["defaultIconColorVariant"],
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
