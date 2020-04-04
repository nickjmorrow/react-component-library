import * as React from 'react';
import styled from 'styled-components';

const StyledPaper = styled('div')<{}>`
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${p => p.color};
`;

export const Paper: React.SFC<{
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
