import { ColorVariant } from "../../atoms";

export interface IconProps {
  sizeVariant?: IconSizeVariant;
  colorVariant?: ColorVariant;
  svgProps?: React.PropsWithoutRef<JSX.IntrinsicElements["svg"]>;
}

export interface IconDisplayProps {
  size: string;
  color: string;
}

export type IconSizeVariant = 1 | 2 | 3 | 4;
