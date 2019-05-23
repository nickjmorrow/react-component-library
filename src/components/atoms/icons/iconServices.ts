import styled from "styled-components";
import { StyleConstant } from "../../../typeUtilities";
import { IconDisplayProps, IconSizeVariant } from "./types";
import { getColor, getColorHover } from "../atomServices";

export const DefaultIconSvg = styled("svg")<IconDisplayProps>`
  height: ${p => getIconSize(p.sizeVariant, p.iconSizes)};
  width: ${p => getIconSize(p.sizeVariant, p.iconSizes)};
  color: ${p => getColor(p.colors, p.colorVariant)};
  transition: color ${p => p.transitions.fast};
  &:hover {
    color: ${p => getColorHover(p.colors, p.colorVariant)};
    transition: color ${p => p.transitions.fast};
  }
`;

export const getIconSize = (
  iconSizeVariant: IconSizeVariant,
  iconSizes: StyleConstant<"icons">["iconSizes"]
): string => {
  return iconSizes["is" + iconSizeVariant];
};
