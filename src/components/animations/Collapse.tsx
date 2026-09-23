import * as React from 'react';
import styled from 'styled-components';
import { useThemeContext } from '~/theming';

// Animates between zero and natural content height by transitioning grid rows (0fr <-> 1fr),
// so no measuring or JS animation is needed.
export const Collapse: React.FC<{
    isOpened: boolean;
    style?: React.CSSProperties;
    children: React.ReactNode;
}> = ({ isOpened, style, children }) => {
    const { transitions } = useThemeContext();
    return (
        <Outer $isOpened={isOpened} $transition={transitions.medium} style={style} aria-hidden={!isOpened}>
            <Inner>{children}</Inner>
        </Outer>
    );
};

const Outer = styled.div<{ $isOpened: boolean; $transition: string }>`
    display: grid;
    grid-template-rows: ${p => (p.$isOpened ? '1fr' : '0fr')};
    visibility: ${p => (p.$isOpened ? 'visible' : 'hidden')};
    transition:
        grid-template-rows ${p => p.$transition},
        visibility ${p => p.$transition};
`;

const Inner = styled.div`
    min-height: 0;
    overflow: hidden;
`;
