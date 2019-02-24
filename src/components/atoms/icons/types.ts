export type IconColorVariant =
  | "primaryLight"
  | "primaryDark"
  | "secondaryLight"
  | "secondaryDark";

export interface IconProps {
  sizeVariant?: IconSizeVariant;
  colorVariant?: IconColorVariant;
}

export interface IconDisplayProps {
  size: string;
  color: string;
}

export type IconSizeVariant = 1 | 2 | 3 | 4;
