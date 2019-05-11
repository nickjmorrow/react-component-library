import * as React from "react";
import { DefaultIconSvg } from "./DefaultIconSvg";
import { IconProps } from "./types";

export const HumidityIcon: React.SFC<IconProps> = ({
  sizeVariant,
  colorVariant,
  ...svgProps
}) => (
  <DefaultIconSvg
    {...svgProps}
    sizeVariant={sizeVariant}
    colorVariant={colorVariant}
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    transform="scale(0.8,0.8)">
    <g>
      <g>
        <path
          fill="currentColor"
          d="M413.602,225.145L256,0L98.398,225.145c-31.625,45.18-41.04,101.519-25.833,154.574C87.582,432.109,140.105,512,256,512    s168.417-79.891,183.435-132.281C454.643,326.664,445.227,270.325,413.602,225.145z M398.552,368.001    c-11.466,40.001-55.719,101.469-142.551,101.469s-131.084-61.469-142.551-101.469c-11.657-40.667-4.443-83.846,19.791-118.466    l122.76-175.372l122.76,175.372C402.995,284.154,410.208,327.333,398.552,368.001z"
        />
      </g>
    </g>
  </DefaultIconSvg>
);
