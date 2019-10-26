import * as React from 'react';
import { DefaultIconSvg } from './DefaultIconSvg';
import { IconProps } from './types';

export const EditIcon: React.SFC<IconProps> = ({ colorVariant, sizeVariant, ...svgProps }) => {
    return (
        <DefaultIconSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...svgProps}
            colorVariant={colorVariant}
            sizeVariant={sizeVariant}
        >
            <path
                fill="currentColor"
                d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z"
                transform="translate(2,3),scale(0.8)"
            />
        </DefaultIconSvg>
    );
};
