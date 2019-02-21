export type IconColorVariant =
  | "primaryLight"
  | "primaryDark"
  | "secondaryLight"
  | "secondaryDark";

export interface IconProps {
  sizeVariant?: number;
  colorVariant?: IconColorVariant;
}

export interface IconDisplayProps {
  size: string;
  color: string;
}
