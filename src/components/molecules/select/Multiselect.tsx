import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '~/components';
import { useThemeContext } from '~/theming';
import { IOption } from '~/types';
import { Option } from './Option';
import { StyledOptionList } from './StyledOptionList';
import { StyledSelect } from './StyledSelect';

export const Multiselect: React.SFC<{
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
    const toggleIsMenuVisible = () => setIsMenuVisible(currentIsMenuVisible => !currentIsMenuVisible);

    const handleClickOption = (option: IOption) => {
        const newOptions = currentOptions.some(co => co.value === option.value)
            ? currentOptions.filter(co => co.value !== option.value)
            : [...currentOptions, option];
        handleChange(newOptions);
    };

    const { spacing } = useThemeContext();

    const wrapperRef = useRef<HTMLDivElement>(null);

    // TODO: can this be shared? can this be a custom hook?
    // same for the wrapperRef above
    const handleClick = (e: React.MouseEvent | Event) => {
        // @ts-ignore
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            console.log('detected click outside, closing');

            setIsMenuVisible(false);
            return;
        }

        // @ts-ignore
        if (e.dispatchConfig === undefined) {
            return;
        }

        toggleIsMenuVisible();
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick, false);

        return () => {
            document.removeEventListener('mousedown', handleClick, false);
        };
    }, []);

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
        <div ref={wrapperRef}>
            <Wrapper width={spacing.ss32}>
                {label && (
                    <Typography sizeVariant={1} colorVariant={error ? 'danger' : 'secondaryDark'}>
                        {label || error}
                    </Typography>
                )}
                <StyledSelect
                    onClick={(e: React.MouseEvent) => handleClick(e)}
                    isMenuVisible={isMenuVisible}
                    hasError={hasError}
                >
                    {currentOptionsLabels}
                </StyledSelect>
                <StyledOptionList numVisibleOptions={numVisibleOptions} isMenuVisible={isMenuVisible}>
                    {options.map(o => (
                        <Option
                            key={o.value}
                            onClick={handleClickOption}
                            option={o}
                            isSelected={currentOptions.some(co => co.value === o.value)}
                        />
                    ))}
                </StyledOptionList>
                {belowText && (
                    <Typography sizeVariant={1} colorVariant={error ? 'danger' : 'secondaryDark'}>
                        {belowText}
                    </Typography>
                )}
            </Wrapper>
        </div>
    );
};

// TODO: can this be shared with Select.tsx?
const Wrapper = styled('div')<{ width: string }>`
    width: ${p => p.width};
    height: 40px;
`;
