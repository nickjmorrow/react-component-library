import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { GetComponentProps } from '~/typeUtilities';
import { ColorVariant, StyleVariant } from './types';
import { Typography } from './typography';

export const Link: React.SFC<{
    route: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
    styleVariant?: StyleVariant;
    isInline?: boolean;
    onClick?: () => void;
    typographyProps?: GetComponentProps<typeof Typography>;
}> = ({ children, route, style, styleVariant = 1, isInline = false, typographyProps, onClick: handleClick }) => {
    const defaultLinkStyle = {
        textDecoration: 'none',
        display: isInline ? 'inline' : 'flex',
        alignItems: 'center',
    };
    const customStyle = { ...defaultLinkStyle, ...style };
    const isExternalLink = route.split('')[0] !== '/';
    const content = (
        <Typography colorVariant={getColorVariant(styleVariant)} {...typographyProps}>
            {children}
        </Typography>
    );
    return isExternalLink ? (
        <a href={route} onClick={handleClick} style={style}>
            {content}
        </a>
    ) : (
        <RouterLink to={route} style={customStyle} onClick={handleClick}>
            {content}
        </RouterLink>
    );
};

const getColorVariant = (styleVariant: StyleVariant): ColorVariant => {
    switch (styleVariant) {
        case 1:
            return 'core';
        case 2:
        case 3:
            return 'primaryDark';
    }
};
