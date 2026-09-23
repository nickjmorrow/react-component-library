import * as React from 'react';
import { useId, useState } from 'react';
import { Select as RadixSelect } from 'radix-ui';
import styled from 'styled-components';
import { Typography } from '~/components';
import { useThemeContext } from '~/theming';
import { IOption } from '~/types';
import { Option } from './Option';
import { StyledSelect } from './StyledSelect';
import { menuContentStyles, menuItemStyles } from './menuStyles';
import { GetComponentProps, Theme } from '~/typeUtilities';
import { shouldForwardProp } from '~/styled';

// Radix Select provides keyboard navigation, typeahead, focus management and combobox/listbox semantics.
export const Select: React.FC<{
    options: IOption[];
    currentOption: IOption;
    styleApi?: {
        wrapper?: React.CSSProperties;
        currentOption?: React.CSSProperties;
        currentOptionTypography?: React.CSSProperties;
        optionsList?: React.CSSProperties;
        optionStyleApi?: GetComponentProps<typeof Option>['styleApi'];
    };
    includeNoneOptionAfterSelection?: boolean;
    label?: string;
    helperText?: string;
    error?: string;
    numVisibleOptions?: number;
    onChange(option: IOption): void;
}> = ({
    onChange: handleChange,
    currentOption,
    options,
    label,
    helperText,
    error = '',
    numVisibleOptions,
    styleApi = {},
}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const theme = useThemeContext();
    const triggerId = useId();

    const handleValueChange = (value: string) => {
        const option = options.find(o => String(o.value) === value);
        if (option) {
            handleChange(option);
        }
    };

    const hasError = error.length > 0;
    const belowText = error || helperText;

    return (
        <Wrapper width={theme.spacing.ss32} style={styleApi.wrapper}>
            {label && (
                <label htmlFor={triggerId}>
                    <Typography sizeVariant={1} colorVariant={error ? 'danger' : 'secondaryDark'}>
                        {label}
                    </Typography>
                </label>
            )}
            <RadixSelect.Root
                value={String(currentOption.value)}
                onValueChange={handleValueChange}
                open={isMenuVisible}
                onOpenChange={setIsMenuVisible}
            >
                <RadixSelect.Trigger asChild>
                    <StyledSelect
                        id={triggerId}
                        isMenuVisible={isMenuVisible}
                        hasError={hasError}
                        aria-invalid={hasError || undefined}
                        style={styleApi.currentOption}
                    >
                        <Typography sizeVariant={3} style={styleApi.currentOptionTypography}>
                            <RadixSelect.Value>{currentOption.label}</RadixSelect.Value>
                        </Typography>
                    </StyledSelect>
                </RadixSelect.Trigger>
                <RadixSelect.Portal>
                    <Content
                        position="popper"
                        sideOffset={4}
                        $theme={theme}
                        $numVisibleOptions={numVisibleOptions}
                        style={styleApi.optionsList}
                    >
                        <RadixSelect.Viewport>
                            {options.map(o => (
                                <Item
                                    key={o.value}
                                    value={String(o.value)}
                                    $theme={theme}
                                    style={styleApi.optionStyleApi?.option}
                                >
                                    <Typography style={styleApi.optionStyleApi?.typography}>
                                        <RadixSelect.ItemText>{o.label}</RadixSelect.ItemText>
                                    </Typography>
                                </Item>
                            ))}
                        </RadixSelect.Viewport>
                    </Content>
                </RadixSelect.Portal>
            </RadixSelect.Root>

            {belowText && (
                <Typography
                    sizeVariant={1}
                    colorVariant={error ? 'danger' : 'secondaryDark'}
                    style={{ position: 'absolute', bottom: label ? 'none' : '-30px' }}
                >
                    {belowText}
                </Typography>
            )}
        </Wrapper>
    );
};

const Wrapper = styled('div').withConfig({ shouldForwardProp })<{ width: string }>`
    width: ${p => p.width};
    height: 40px;
    position: relative;
`;

const Content = styled(RadixSelect.Content)<{ $theme: Theme; $numVisibleOptions?: number }>`
    ${menuContentStyles}
    width: var(--radix-select-trigger-width);
`;

const Item = styled(RadixSelect.Item)<{ $theme: Theme }>`
    ${menuItemStyles}
`;
