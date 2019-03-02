import { ButtonColorVariant } from "./buttons/types";

export type CoreColorVariant =
  | "primaryLight"
  | "primaryDark"
  | "secondaryLight"
  | "secondaryDark"
  | ButtonColorVariant;

export interface ColorSet {
  color: string;
  colorHover: string;
  colorActive: string;
  backgroundColor: string;
  backgroundColorHover: string;
  backgroundColorActive: string;
}

export type StyleVariant = "primary" | "secondary" | "tertiary";

export interface ColorState {
  normal: string;
  hover: string;
  active: string;
}


