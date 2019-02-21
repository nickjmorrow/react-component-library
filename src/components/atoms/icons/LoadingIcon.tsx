import * as React from "react";
import { DefaultIconSvg, getColor } from "./iconServices";
import { IconProps } from "./types";
import { getStyles, ThemeContext } from "~/index";

export const LoadingIcon: React.SFC<IconProps> = ({
  sizeVariant,
  colorVariant
}) => {
  const {
    colors,
    icons: { iconSizes, defaultIconSizeVariant, defaultIconColorVariant }
  } = getStyles(React.useContext(ThemeContext).theme);
  return (
    <DefaultIconSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      size={iconSizes[sizeVariant || defaultIconSizeVariant]}
      color={getColor(colorVariant || defaultIconColorVariant, colors)}>
      <g>
        <path
          d="M50 15A35 35 0 1 0 74.787 25.213"
          fill="none"
          ng-attr-stroke="{{config.color}}"
          ng-attr-stroke-width="{{config.width}}"
          stroke="currentColor"
          stroke-width="12"
        />
        <path
          ng-attr-d="{{config.darrow}}"
          ng-attr-fill="{{config.color}}"
          d="M49 3L49 27L61 15L49 3"
          fill="currentColor"
        />
      </g>
    </DefaultIconSvg>
  );
};
