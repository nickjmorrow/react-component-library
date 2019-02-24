import * as React from "react";
import { IconProps } from "./types";
import { ThemeContext } from "~/styleConstants";
import { DefaultIconSvg, getColor, getIconSize } from "./iconServices";

export const UploadIcon: React.SFC<IconProps> = ({
  sizeVariant,
  colorVariant
}) => {
  const {
    colors,
    icons: { iconSizes, defaultIconSizeVariant, defaultIconColorVariant }
  } = React.useContext(ThemeContext);
  return (
    <DefaultIconSvg
      x="0px"
      y="0px"
      viewBox="0 0 96 96"
      size={iconSizes[getIconSize(sizeVariant || defaultIconSizeVariant)]}
      color={getColor(colorVariant || defaultIconColorVariant, colors)}>
      <path
        fill="currentColor"
        d="M39.3,61.1h17.5V43.6h11.7L48,23.2L27.6,43.6h11.7V61.1z M27.6,67h40.8v5.8H27.6V67z"
      />
    </DefaultIconSvg>
  );
};
