import * as React from 'react';
import { DefaultIconSvg } from '~/components/atoms/icons';
import { IconProps } from '~/components/atoms/icons/types';

export const AddIcon: React.SFC<IconProps> = ({ sizeVariant, colorVariant = 'core', ...svgProps }) => (
    <DefaultIconSvg
        {...svgProps}
        colorVariant={colorVariant}
        sizeVariant={sizeVariant}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <circle cx="12" cy="12" r="10" fill="transparent" />
        <path
            d="M13 11h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4z"
            fill="currentColor"
        />
    </DefaultIconSvg>
);
