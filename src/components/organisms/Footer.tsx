import * as React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '~/theming';
import { StyleConstant, Theme } from '../../typeUtilities';

export const Footer: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}> = ({ children, className, style }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <StyledFooter style={style} className={className} theme={theme}>
            {children}
        </StyledFooter>
    );
};

const StyledFooter = styled('footer')<{ theme: Theme }>`
    background-color: ${p => p.theme.colors.neutral.cs2};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${p => p.theme.spacing.ss4};
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
`;
