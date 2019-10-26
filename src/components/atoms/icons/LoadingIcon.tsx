import * as React from 'react';
import { DefaultIconSvg } from './DefaultIconSvg';
import { IconProps } from './types';

export const LoadingIcon: React.SFC<IconProps> = ({ sizeVariant, colorVariant, ...svgProps }) => (
    <DefaultIconSvg
        {...svgProps}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        sizeVariant={sizeVariant}
        colorVariant={colorVariant}
    >
        <g>
            <path
                d="M50 15A35 35 0 1 0 74.787 25.213"
                fill="none"
                ng-attr-stroke="{{config.color}}"
                ng-attr-strokewidth="{{config.width}}"
                stroke="currentColor"
                strokeWidth="12"
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
