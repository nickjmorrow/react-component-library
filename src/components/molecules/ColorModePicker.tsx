import * as React from 'react';
import { ToggleGroup } from 'radix-ui';
import styled from 'styled-components';
import { ColorModePreference, useThemeContext } from '~/theming';
import { Theme } from '~/typeUtilities';

const options: { value: ColorModePreference; label: string; icon: React.ReactNode }[] = [
    {
        value: 'light',
        label: 'Light theme',
        icon: (
            <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </>
        ),
    },
    {
        value: 'dark',
        label: 'Dark theme',
        icon: <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7z" />,
    },
    {
        value: 'system',
        label: 'Match system theme',
        icon: (
            <>
                <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
                <path d="M8 21h8M12 16.5V21" />
            </>
        ),
    },
];

/** Segmented light / dark / system control. Pair with `useColorModePreference`. */
export const ColorModePicker: React.FC<{
    value: ColorModePreference;
    onChange(preference: ColorModePreference): void;
    className?: string;
    style?: React.CSSProperties;
}> = ({ value, onChange: handleChange, className, style }) => {
    const theme = useThemeContext();
    return (
        <Root
            type="single"
            aria-label="Color theme"
            value={value}
            // Radix reports '' when the active item is clicked again; a theme must always be selected.
            onValueChange={next => next && handleChange(next as ColorModePreference)}
            $theme={theme}
            className={className}
            style={style}
        >
            {options.map(option => (
                <Item
                    key={option.value}
                    value={option.value}
                    aria-label={option.label}
                    title={option.label}
                    $theme={theme}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        {option.icon}
                    </svg>
                </Item>
            ))}
        </Root>
    );
};

const Root = styled(ToggleGroup.Root)<{ $theme: Theme }>`
    display: inline-flex;
    gap: 2px;
    padding: 2px;
    border: ${p => `${p.$theme.border.borderStyle.bs1} ${p.$theme.colors.neutral.cs3}`};
    border-radius: ${p => p.$theme.border.borderRadius.br1};
    background-color: ${p => p.$theme.colors.background};
`;

const Item = styled(ToggleGroup.Item)<{ $theme: Theme }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
    border-radius: 4px;
    background: none;
    color: ${p => p.$theme.colors.neutral.cs6};
    cursor: pointer;
    transition:
        background-color ${p => p.$theme.transitions.fast},
        color ${p => p.$theme.transitions.fast};
    &:hover {
        color: ${p => p.$theme.colors.neutral.cs8};
        background-color: ${p => p.$theme.colors.neutral.cs2};
    }
    &[data-state='on'] {
        color: ${p => p.$theme.colors.core.cs6};
        background-color: ${p => p.$theme.colors.neutral.cs3};
    }
    &:focus-visible {
        outline: 2px solid ${p => p.$theme.colors.core.cs5};
        outline-offset: 1px;
    }
`;
