export type ColorVariant =
  | "primaryLight"
  | "primaryDark"
  | "secondaryLight"
  | "secondaryDark"
  | "core"
  | "accent"
  | "success"
  | "danger"
  | "warning"
  | "transparent"
  | "inherit"
  | "background";

export interface ColorSet {
  color: string;
  colorHover: string;
  colorActive: string;
  backgroundColor: string;
  backgroundColorHover: string;
  backgroundColorActive: string;
  borderColor: string;
  borderColorHover: string;
  borderColorActive: string;
}

export type StyleVariant = "primary" | "secondary" | "tertiary";

export interface ColorState {
  normal: string;
  hover: string;
  active: string;
}

export type UIState = "normal" | "hover" | "active";
