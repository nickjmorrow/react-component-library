import * as React from "react";
import { DefaultIconSvg } from "./DefaultIconSvg";
import { IconProps } from "./types";

export const ChevronUpIcon: React.SFC<IconProps> = ({
  colorVariant,
  sizeVariant,
  ...svgProps
}) => {
  return (
    <DefaultIconSvg
      {...svgProps}
      colorVariant={colorVariant}
      sizeVariant={sizeVariant}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"
      />
    </DefaultIconSvg>
  );
};
