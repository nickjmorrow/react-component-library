import * as React from "react";
import { DefaultIconSvg } from "../DefaultIconSvg";
import { IconProps } from "../types";

export const JavaScriptIcon: React.SFC<IconProps> = ({
  sizeVariant,
  colorVariant = "core",
  ...svgProps
}) => (
  <DefaultIconSvg
    {...svgProps}
    colorVariant={colorVariant}
    sizeVariant={sizeVariant}
    viewBox="0 0 1024 1024" transform="scale(1.1)">
		<path d="M128 128h768v768H128V128m201.813333 641.706667c17.066667 36.266667 50.773333 66.133333 108.373334 66.133333 64 0 107.946667-34.133333 107.946666-108.8v-246.613333h-72.533333V725.333333c0 36.693333-14.933333 46.08-38.4 46.08-24.746667 0-34.986667-17.066667-46.506667-37.12l-58.88 35.413334m255.146667-7.68c21.333333 41.813333 64.426667 73.813333 131.84 73.813333 68.266667 0 119.466667-35.413333 119.466667-100.693333 0-60.16-34.56-87.04-96-113.493334l-17.92-7.68c-31.146667-13.226667-44.373333-22.186667-44.373334-43.52 0-17.493333 13.226667-31.146667 34.56-31.146666 20.48 0 34.133333 8.96 46.506667 31.146666l55.893333-37.12c-23.466667-40.96-56.746667-56.746667-102.4-56.746666-64.426667 0-105.813333 40.96-105.813333 95.146666 0 58.88 34.56 86.613333 86.613333 108.8l17.92 7.68c33.28 14.506667 52.906667 23.466667 52.906667 48.213334 0 20.48-19.2 35.413333-49.066667 35.413333-35.413333 0-55.893333-18.346667-71.253333-43.946667l-58.88 34.133334z" fill="#FFCA28"/></DefaultIconSvg>
);
