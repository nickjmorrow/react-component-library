import * as React from 'react';
import { DefaultIconSvg } from '../DefaultIconSvg';
import { IconProps } from '../types';

export const NETCoreIcon: React.SFC<IconProps> = ({ sizeVariant, colorVariant = 'core', ...svgProps }) => (
    <DefaultIconSvg
        {...svgProps}
        colorVariant={colorVariant}
        sizeVariant={sizeVariant}
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 64 64"
    >
        <title>logo_NET</title>
        <circle fill="#5c2d91" cx="32" cy="32" r="31" transform="translate(-13.25 32) rotate(-45)" />
        <path fill="#633ba3" d="M53.92,10.08a31,31,0,0,1,0,43.84L10.08,10.08A31,31,0,0,1,53.92,10.08Z" />
        <g>
            <path
                fill="#fff"
                d="M5.28,40.29a1.4,1.4,0,0,1-1.41-1.41,1.39,1.39,0,0,1,.4-1,1.43,1.43,0,0,1,1.55-.3,1.45,1.45,0,0,1,.45.29,1.41,1.41,0,0,1,.42,1,1.3,1.3,0,0,1-.12.55,1.51,1.51,0,0,1-.31.45,1.42,1.42,0,0,1-.45.3A1.39,1.39,0,0,1,5.28,40.29Z"
            />
            <path
                fill="#fff"
                d="M24.94,40,13.28,23.14l-.43-.66a4.36,4.36,0,0,1-.34-.66h-.07c0,.18,0,.42.05.73s0,.7,0,1.17V40H10.55V19h2.15L24.17,35.65l.48.74L25,37h.07q-.06-.48-.09-1.08c0-.4,0-.84,0-1.33V19h2V40Z"
            />
            <path fill="#fff" d="M31.66,40V19H41.9v1.79H33.61v7.71h7.67v1.76H33.61v8h8.76V40Z" />
            <path fill="#fff" d="M52.06,20.78V40H50.11V20.78h-6V19H58.12v1.79Z" />
        </g>
    </DefaultIconSvg>
);
