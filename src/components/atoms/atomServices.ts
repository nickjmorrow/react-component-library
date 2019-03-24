import { StyleConstant } from "~/index";
import { ColorVariant } from ".";
import { UIState } from "./types";

export const getColorHover = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "primaryDark":
      return colors.neutral.darkest;
    case "secondaryDark":
      return colors.neutral.darker;
    case "primaryLight":
      return colors.neutral.lightest;
    case "secondaryLight":
      return colors.neutral.lighter;
    case "core":
      return colors.core.light;
    case "accent":
      return colors.accent.light;
    case "success":
      return colors.success.light;
    case "warning":
      return colors.warning.light;
    case "danger":
      return colors.danger.light;
    case "transparent":
      return colors.transparent;
    case "inherit":
      return colors.inherit;
  }
};

// TODO: make exception class for Throw.if

export const getColorActive = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "primaryDark":
      return colors.neutral.darker;
    case "secondaryDark":
      return colors.neutral.main;
    case "primaryLight":
      return colors.neutral.light;
    case "secondaryLight":
      return colors.neutral.main;
    case "core":
      return colors.core.dark;
    case "accent":
      return colors.accent.dark;
    case "success":
      return colors.success.dark;
    case "warning":
      return colors.warning.dark;
    case "danger":
      return colors.danger.dark;
    case "transparent":
      return colors.transparent;
    case "inherit":
      return colors.inherit;
  }
};

export const getColor = (
  colors: StyleConstant<"colors">,
  color: ColorVariant
) => {
  switch (color) {
    default:
    case "primaryDark":
      return colors.neutral.darker;
    case "secondaryDark":
      return colors.neutral.main;
    case "primaryLight":
      return colors.neutral.lighter;
    case "secondaryLight":
      return colors.neutral.light;
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
    case "transparent":
      return colors.transparent;
    case "inherit":
      return colors.inherit;
  }
};

export const getColorFunc = (uiState: UIState) => {
  switch (uiState) {
    case "normal":
      return getColor;
    case "hover":
      return getColorHover;
    case "active":
      return getColorActive;
  }
};
