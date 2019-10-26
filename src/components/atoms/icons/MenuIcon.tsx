import * as React from 'react';
import { DefaultIconSvg } from './DefaultIconSvg';
import { IconProps } from './types';

export const MenuIcon: React.SFC<IconProps> = ({ sizeVariant, colorVariant, ...svgProps }) => (
    <DefaultIconSvg
        {...svgProps}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        sizeVariant={sizeVariant}
        colorVariant={colorVariant}
    >
        <path
            fill="currentColor"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
    </DefaultIconSvg>
);
