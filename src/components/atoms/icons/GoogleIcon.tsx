import * as React from 'react';
import { DefaultIconSvg } from './DefaultIconSvg';
import { IconProps } from './types';

export const GoogleIcon: React.SFC<IconProps> = ({ sizeVariant, colorVariant, ...svgProps }) => (
    <DefaultIconSvg
        {...svgProps}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        sizeVariant={sizeVariant}
        colorVariant={colorVariant}
    >
        <path
            fill="currentColor"
            d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12c0,5.523,4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
        />
    </DefaultIconSvg>
);
