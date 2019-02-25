import { StyleConstant } from "~/index";
import { ColorVariant } from "./types";

export const getColorActive = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "core":
      return colors.core.dark;
    case "accent":
      return colors.accent.dark;
    case "success":
      return colors.success.dark;
    case "warning":
      return colors.warning.dark;
    case "danger":
    case "cancel":
      return colors.danger.dark;
    case "white":
      return colors.background;
    case "transparent":
      return colors.transparent;
  }
};

export const getColor = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "white":
      return colors.background;
    case "core":
      return colors.core.main;
    case "accent":
      return colors.accent.main;
    case "success":
      return colors.success.main;
    case "warning":
      return colors.warning.main;
    case "danger":
    case "cancel":
      return colors.danger.main;
    case "transparent":
      return colors.transparent;
  }
};

export const getColorHover = (
  colors: StyleConstant<"colors">,
  variant: ColorVariant
) => {
  switch (variant) {
    case "core":
      return colors.core.light;
    case "accent":
      return colors.accent.light;
    case "success":
      return colors.success.light;
    case "warning":
      return colors.warning.light;
    case "danger":
    case "cancel":
      return colors.danger.light;
    case "white":
      return colors.background;
    case "transparent":
      return colors.transparent;
  }
};
