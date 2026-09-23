import * as React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '~/theming';
import { Theme } from '../../typeUtilities';
import { shouldForwardProp } from '~/styled';

export const Footer: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}> = ({ children, className, style }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <StyledFooter style={style} className={className} manualTheme={theme}>
            {children}
        </StyledFooter>
    );
};

const StyledFooter = styled('footer').withConfig({ shouldForwardProp })<{ manualTheme: Theme }>`
    background-color: ${p => p.manualTheme.colors.neutral.cs2};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${p => p.manualTheme.spacing.ss4};
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
`;
