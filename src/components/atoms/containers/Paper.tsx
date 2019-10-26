import * as React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../../styleConstants';

const StyledPaper = styled('div')<{
    color: string;
    boxShadow: string;
    borderRadius: string;
}>`
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${p => p.color};
    box-shadow: ${p => p.boxShadow};
    border-radius: ${p => p.borderRadius};
`;

export const Paper: React.SFC<{
    color?: string;
    style?: React.CSSProperties;
    props?: React.HTMLProps<HTMLDivElement>;
}> = ({ children, color, style, ...props }) => {
    const {
        colors,
        boxShadow,
        border: { borderRadius },
    } = React.useContext(ThemeContext);
    return (
        <StyledPaper
            style={style}
            color={color || colors.background}
            boxShadow={boxShadow.bs1}
            borderRadius={borderRadius.br1}
            {...props}
        >
            {children}
        </StyledPaper>
    );
};
