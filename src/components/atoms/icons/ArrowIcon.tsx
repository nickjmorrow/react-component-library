import * as React from "react";
import { DefaultIconSvg } from "./DefaultIconSvg";
import { IconProps } from "./types";

export const ArrowIcon: React.SFC<IconProps> = ({
  sizeVariant,
  colorVariant = "primaryDark",
  ...svgProps
}) => (
  <DefaultIconSvg
    {...svgProps}
    colorVariant={colorVariant}
    sizeVariant={sizeVariant}
    fill="currentColor"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 96 96"
  >
    <g id="XMLID_1_">
      <path
        id="XMLID_5_"
        fill="currentColor"
        d="M65.5,48c0,0.5-0.2,1-0.6,1.4l-28,28C36.5,77.8,36,78,35.5,78c-0.5,0-1-0.2-1.4-0.6l-3-3   c-0.4-0.4-0.6-0.9-0.6-1.4c0-0.5,0.2-1,0.6-1.4L54.7,48L31.1,24.4c-0.4-0.4-0.6-0.9-0.6-1.4s0.2-1,0.6-1.4l3-3   c0.4-0.4,0.9-0.6,1.4-0.6c0.5,0,1,0.2,1.4,0.6l28,28C65.3,47,65.5,47.5,65.5,48z"
      />
    </g>
  </DefaultIconSvg>
);
