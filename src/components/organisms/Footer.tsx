import * as React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../styleConstants';
import { StyleConstant } from '../../typeUtilities';

export const Footer: React.FC<{
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}> = ({ children, className, style }) => {
    const { colors, spacing } = React.useContext(ThemeContext);
    return (
        <StyledFooter style={style} className={className} colors={colors} spacing={spacing}>
            {children}
        </StyledFooter>
    );
};

interface DisplayProps {
    colors: StyleConstant<'colors'>;
    spacing: StyleConstant<'spacing'>;
}

const StyledFooter = styled('footer')<DisplayProps>`
    background-color: ${p => p.colors.neutral.cs2};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${p => p.spacing.ss4};
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
`;
