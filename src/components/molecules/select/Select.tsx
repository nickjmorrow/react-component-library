import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Typography, StyledOptionList } from '~/components';
import { useThemeContext } from '~/theming';
import { IOption } from '~/types';
import { Option } from './Option';
import { StyledSelect } from './StyledSelect';
import { useClickOutside } from './useClickOutside';
import { GetComponentProps } from '~/typeUtilities';
import { shouldForwardProp } from '~/styled';

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
    const toggleIsMenuVisible = () => setIsMenuVisible(currentIsMenuVisible => !currentIsMenuVisible);
    const closeMenu = useCallback(() => setIsMenuVisible(false), []);

    const handleClickOption = (option: IOption) => {
        setIsMenuVisible(false);
        handleChange(option);
    };

    const { spacing } = useThemeContext();

    const wrapperRef = useRef<HTMLDivElement>(null);

    useClickOutside(wrapperRef, closeMenu);

    const hasError = error.length > 0;
    const belowText = error || helperText;

    return (
        <div ref={wrapperRef}>
            <Wrapper width={spacing.ss32} style={styleApi.wrapper}>
                {label && (
                    <Typography sizeVariant={1} colorVariant={error ? 'danger' : 'secondaryDark'}>
                        {label || error}
                    </Typography>
                )}
                <StyledSelect
                    onClick={toggleIsMenuVisible}
                    isMenuVisible={isMenuVisible}
                    hasError={hasError}
                    style={styleApi.currentOption}
                >
                    <Typography sizeVariant={3} style={styleApi.currentOptionTypography}>
                        {currentOption.label}
                    </Typography>
                </StyledSelect>
                <StyledOptionList
                    numVisibleOptions={numVisibleOptions}
                    isMenuVisible={isMenuVisible}
                    style={styleApi.optionsList}
                >
                    {options.map(o => (
                        <Option
                            key={o.value}
                            onClick={handleClickOption}
                            option={o}
                            styleApi={styleApi.optionStyleApi}
                        />
                    ))}
                </StyledOptionList>

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
        </div>
    );
};

const Wrapper = styled('div').withConfig({ shouldForwardProp })<{ width: string }>`
    width: ${p => p.width};
    height: 40px;
    position: relative;
`;
