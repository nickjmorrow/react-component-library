import * as React from 'react';
import styled from 'styled-components';
import { shouldForwardProp } from '~/styled';

const StyledPaper = styled('div').withConfig({ shouldForwardProp })<{}>`
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${p => p.color};
`;

export const Paper: React.FC<{
    children?: React.ReactNode;
    style?: React.CSSProperties;
    props?: React.HTMLProps<HTMLDivElement>;
    className?: string;
}> = ({ children, className, style, ...props }) => {
    return (
        <StyledPaper style={style} className={className} {...props}>
            {children}
        </StyledPaper>
    );
};
