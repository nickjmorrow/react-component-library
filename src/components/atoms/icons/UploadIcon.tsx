import * as React from 'react';
import { DefaultIconSvg } from './DefaultIconSvg';
import { IconProps } from './types';

export const UploadIcon: React.SFC<IconProps> = ({ sizeVariant, colorVariant, ...svgProps }) => (
    <DefaultIconSvg
        {...svgProps}
        x="-40px"
        y="-140px"
        viewBox="20 20 55 55"
        colorVariant={colorVariant}
        sizeVariant={sizeVariant}
    >
        <path
            fill="currentColor"
            d="M39.3,61.1h17.5V43.6h11.7L48,23.2L27.6,43.6h11.7V61.1z M27.6,67h40.8v5.8H27.6V67z"
        />
    </DefaultIconSvg>
);
