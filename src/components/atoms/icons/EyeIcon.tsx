import * as React from "react";
import { IconProps } from "./types";
import styled from "styled-components";
import { ThemeContext } from "../../../styleConstants";
import { getColor, getIconSize } from "./iconServices";

export const EyeIcon: React.SFC<IconProps> = ({
  sizeVariant = 2,
  colorVariant = "primaryDark",
  svgProps
}) => {
  const {
    icons: { iconSizes, defaultIconSizeVariant },
    colors
  } = React.useContext(ThemeContext);
  return (
    <Svg
      {...svgProps}
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="eye"
      role="img"
      cursor="pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      size={iconSizes[getIconSize(sizeVariant || defaultIconSizeVariant)]}
      color={getColor(colorVariant, colors)}>
      <path
        fill="currentColor"
        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
      />
    </Svg>
  );
};

const Svg = styled("svg")<{ size: string; color: string }>`
  height: ${p => p.size};
  width: ${p => p.size};
  color: ${p => p.color};
`;
