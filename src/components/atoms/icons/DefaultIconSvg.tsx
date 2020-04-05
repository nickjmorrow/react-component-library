import * as React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '~/theming';
import { getColor, getColorHover } from '../atomServices';
import { getIconSize } from './iconServices';
import { IconDisplayProps, IconProps } from './types';

export const DefaultIconSvg: React.FC<IconProps> = ({ children, colorVariant, sizeVariant, style, ...svgProps }) => {
    const {
        colors,
        icons: { iconSizes, defaultIconColorVariant, defaultIconSizeVariant },
        transitions,
    } = React.useContext(ThemeContext);

    return (
        <Svg
            colors={colors}
            colorVariant={colorVariant || defaultIconColorVariant}
            sizeVariant={sizeVariant || defaultIconSizeVariant}
            iconSizes={iconSizes}
            transitions={transitions}
            style={style}
            {...svgProps}
        >
            {children}
        </Svg>
    );
};

export const Svg = styled('svg')<IconDisplayProps>`
    height: ${p => getIconSize(p.sizeVariant, p.iconSizes)};
    width: ${p => getIconSize(p.sizeVariant, p.iconSizes)};
    color: ${p => getColor(p.colors, p.colorVariant)};
    transition: color ${p => p.transitions.medium};
    &:hover {
        color: ${p => getColorHover(p.colors, p.colorVariant)};
        transition: color ${p => p.transitions.medium};
    }
`;
