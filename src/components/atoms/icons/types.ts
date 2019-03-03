import { CoreColorVariant } from "../../atoms";

export interface IconProps {
  sizeVariant?: IconSizeVariant;
  colorVariant?: CoreColorVariant;
}

export interface IconDisplayProps {
  size: string;
  color: string;
}

export type IconSizeVariant = 1 | 2 | 3 | 4;
