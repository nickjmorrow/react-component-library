import { css, keyframes } from 'styled-components';
import { Theme } from '~/typeUtilities';

const OPTION_ELEMENT_HEIGHT = 51;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
`;

// Shared by the Radix Select and DropdownMenu popovers behind Select and Multiselect.
export const menuContentStyles = css<{ $theme: Theme; $numVisibleOptions?: number }>`
    background-color: ${p => p.$theme.colors.background};
    box-shadow: ${p => p.$theme.boxShadow.bs1};
    border-radius: ${p => p.$theme.border.borderRadius.br1};
    max-height: ${p => (p.$numVisibleOptions ? `${p.$numVisibleOptions * OPTION_ELEMENT_HEIGHT}px` : '300px')};
    overflow: hidden auto;
    z-index: 10;
    &[data-state='open'] {
        animation: ${fadeIn} ${p => p.$theme.transitions.fast} ease-out;
    }
`;

export const menuItemStyles = css<{ $theme: Theme }>`
    padding: ${p => p.$theme.spacing.ss3};
    cursor: pointer;
    outline: none;
    user-select: none;
    background-color: ${p => p.$theme.colors.neutral.cs1};
    transition: background-color ${p => p.$theme.transitions.fast};
    &[data-highlighted] {
        background-color: ${p => p.$theme.colors.neutral.cs2};
        /* The background alone is too faint to track keyboard focus, so mark it with an accent bar. */
        box-shadow: inset 3px 0 0 ${p => p.$theme.colors.core.cs5};
    }
    &[data-state='checked'] {
        background-color: ${p => p.$theme.colors.neutral.cs3};
    }
`;
