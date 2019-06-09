import * as React from "react";
import { DefaultIconSvg } from "../DefaultIconSvg";
import { IconProps } from "../types";

export const MongoDBIcon: React.SFC<IconProps> = ({
  sizeVariant,
  colorVariant = "core",
  ...svgProps
}) => (
  <DefaultIconSvg
    {...svgProps}
    colorVariant={colorVariant}
    sizeVariant={sizeVariant}
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
	transform="scale(1.3)"
  >
    <g id="Layer_3" />
    <g id="Layer_1">
      <path
        fill="#D7D8D9"
        d="M35.2,3.3C35.2,3.3,35.1,3.2,35.2,3.3C35.1,3.2,35.2,3.3,35.2,3.3L35.2,3.3z"
      />
      <g id="Layer_2_1_" />
      <rect x="24.3" y="38.6" fill="#897E70" width="2.4" height="4.7" />
      <path fill="#428642" d="M25.4,40c19.6-19.6,0-33.3,0-33.3V40z" />
      <path fill="#55A748" d="M25.4,40c-19.6-19.6,0-33.3,0-33.3V40z" />
    </g>
    <g id="Layer_2" />
  </DefaultIconSvg>
);
