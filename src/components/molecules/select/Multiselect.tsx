import * as React from 'react';
import { useId, useState } from 'react';
import { DropdownMenu } from 'radix-ui';
import styled from 'styled-components';
import { Typography } from '~/components';
import { useThemeContext } from '~/theming';
import { IOption } from '~/types';
import { StyledSelect } from './StyledSelect';
import { menuContentStyles, menuItemStyles } from './menuStyles';
import { Theme } from '~/typeUtilities';
import { shouldForwardProp } from '~/styled';

// Radix has no multi-select, so this is a DropdownMenu of checkbox items: keyboard navigable,
// announced as checked/unchecked, and kept open while toggling options.
export const Multiselect: React.FC<{
    options: IOption[];
    currentOptions: IOption[];
    label?: string;
    helperText?: string;
    error?: string;
    placeholder?: string;
    numVisibleOptions?: number;
    onChange(options: IOption[]): void;
}> = ({
    onChange: handleChange,
    currentOptions,
    options,
    label,
    helperText,
    error = '',
    placeholder = ' ',
    numVisibleOptions,
}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const theme = useThemeContext();
    const triggerId = useId();

    const isSelected = (option: IOption) => currentOptions.some(co => co.value === option.value);

    const handleToggleOption = (option: IOption) => {
        const newOptions = isSelected(option)
            ? currentOptions.filter(co => co.value !== option.value)
            : [...currentOptions, option];
        handleChange(newOptions);
    };

    const hasError = error.length > 0;
    const belowText = error || helperText;

    const currentOptionsLength = currentOptions.length;
    const currentOptionsLabels = (currentOptionsLength &&
        currentOptions.map((co, i) => (
            <Typography key={co.value} sizeVariant={3} style={{ display: 'inline' }}>
                {i === currentOptionsLength - 1 ? co.label : `${co.label}, ` + ' '}
            </Typography>
        ))) || (
        <Typography colorVariant={'secondaryDark'} sizeVariant={3}>
            {placeholder}
        </Typography>
    );

    return (
        <Wrapper width={theme.spacing.ss32}>
            {label && (
                <label htmlFor={triggerId}>
                    <Typography sizeVariant={1} colorVariant={error ? 'danger' : 'secondaryDark'}>
                        {label}
                    </Typography>
                </label>
            )}
            <DropdownMenu.Root open={isMenuVisible} onOpenChange={setIsMenuVisible}>
                <DropdownMenu.Trigger asChild>
                    <StyledSelect
                        id={triggerId}
                        isMenuVisible={isMenuVisible}
                        hasError={hasError}
                        aria-invalid={hasError || undefined}
                    >
                        {currentOptionsLabels}
                    </StyledSelect>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <Content align="start" sideOffset={4} $theme={theme} $numVisibleOptions={numVisibleOptions}>
                        {options.map(o => (
                            <Item
                                key={o.value}
                                checked={isSelected(o)}
                                onCheckedChange={() => handleToggleOption(o)}
                                // Keep the menu open so several options can be toggled in a row.
                                onSelect={e => e.preventDefault()}
                                $theme={theme}
                            >
                                <Typography>{o.label}</Typography>
                            </Item>
                        ))}
                    </Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
            {belowText && (
                <Typography sizeVariant={1} colorVariant={error ? 'danger' : 'secondaryDark'}>
                    {belowText}
                </Typography>
            )}
        </Wrapper>
    );
};

const Wrapper = styled('div').withConfig({ shouldForwardProp })<{ width: string }>`
    width: ${p => p.width};
    height: 40px;
`;

const Content = styled(DropdownMenu.Content)<{ $theme: Theme; $numVisibleOptions?: number }>`
    ${menuContentStyles}
    width: var(--radix-dropdown-menu-trigger-width);
`;

const Item = styled(DropdownMenu.CheckboxItem)<{ $theme: Theme }>`
    ${menuItemStyles}
`;
