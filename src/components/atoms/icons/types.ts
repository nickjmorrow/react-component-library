export type SizeVariant = 1 | 2 | 3 | 4;
export type ColorVariant =
  | "primaryLight"
  | "primaryDark"
  | "secondaryLight"
  | "secondaryDark";

export interface IconProps {
  sizeVariant?: SizeVariant;
  colorVariant?: ColorVariant;
}

export interface IconDisplayProps {
  size: string;
  color: string;
}
