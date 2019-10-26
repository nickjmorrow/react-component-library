import * as React from 'react';
import { DefaultIconSvg } from './DefaultIconSvg';
import { IconProps } from './types';

export const CloseIcon: React.SFC<IconProps> = ({ colorVariant, sizeVariant, ...svgProps }) => {
    return (
        <DefaultIconSvg
            xmlns="http://www.w3.org/2000/svg"
            {...svgProps}
            colorVariant={colorVariant}
            sizeVariant={sizeVariant}
            viewBox="0 0 24 24"
            transform="scale(1.4)"
        >
            <path
                fill="currentColor"
                d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"
            />
        </DefaultIconSvg>
    );
};
