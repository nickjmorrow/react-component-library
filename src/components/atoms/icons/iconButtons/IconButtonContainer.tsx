import * as React from 'react';
import { IconProps } from '../types';
import { ColorVariant, StyleVariant } from '../../types';
import { ThemeContext } from '~/styleConstants';
import styled from 'styled-components';
import { getColorFunc } from '../../atomServices';
import { StyleConstant } from '~/typeUtilities';
import { UIState } from '../../types';

interface Props {
    styleVariant: StyleVariant;
    children: React.ReactNode;
    showBoxShadow?: boolean;
    isDisabled?: boolean;
}

export const IconButtonContainer: React.FC<IconProps & Props & { onClick: () => void }> = ({
    styleVariant,
    showBoxShadow = true,
    colorVariant = 'core',
    isDisabled = false,
    onClick: handleClick,
    children,
    style,
}) => {
    const {
        colors,
        transitions,
        boxShadow,
        border: { borderStyle },
    } = React.useContext(ThemeContext);

    const handleClickInternal = () => {
        if (!isDisabled) {
            handleClick();
        }
    };

    return (
        <Wrapper
            colors={colors}
            transitions={transitions}
            styleVariant={styleVariant}
            showBoxShadow={showBoxShadow}
            colorVariant={colorVariant}
            boxShadow={boxShadow}
            isDisabled={isDisabled}
            onClick={handleClickInternal}
            borderStyle={borderStyle}
            style={style}
        >
            <IconWrapper
                colors={colors}
                transitions={transitions}
                styleVariant={styleVariant}
                colorVariant={colorVariant}
                isDisabled={isDisabled}
            >
                {children}
            </IconWrapper>
        </Wrapper>
    );
};

const IconWrapper = styled('div')<
    Props & {
        colors: StyleConstant<'colors'>;
        transitions: StyleConstant<'transitions'>;
        colorVariant: ColorVariant;
        isDisabled: boolean;
    }
>`
    color: ${p => getIconColorVariant(p.styleVariant, p.colorVariant, p.colors, 'normal', p.isDisabled)};
    &:hover {
        color: ${p => getIconColorVariant(p.styleVariant, p.colorVariant, p.colors, 'hover', p.isDisabled)};
    }
    &:active {
        color: ${p => getIconColorVariant(p.styleVariant, p.colorVariant, p.colors, 'active', p.isDisabled)};
    }
`;

const Wrapper = styled('div')<
    Props &
        React.PropsWithoutRef<JSX.IntrinsicElements['div']> & {
            colors: StyleConstant<'colors'>;
            transitions: StyleConstant<'transitions'>;
            colorVariant: ColorVariant;
            boxShadow: StyleConstant<'boxShadow'>;
            showBoxShadow: boolean;
            isDisabled: boolean;
            borderStyle: StyleConstant<'border'>['borderStyle'];
        }
>`
    border: ${p => p.borderStyle.bs2};
    border-radius: 100%;
    transition: all ${p => p.transitions.fast};
    cursor: ${p => (p.isDisabled ? 'not-allowed' : 'pointer')};
    width: min-content;
    height: min-content;
    box-shadow: ${p => getBoxShadow(p.boxShadow, p.isDisabled, p.showBoxShadow, 'normal')};
    background-color: ${p => getWrapperColorVariant(p.styleVariant, p.colorVariant, p.colors, 'normal', p.isDisabled)};
    border-color: ${p => getBorderColorVariant(p.styleVariant, p.colorVariant, p.colors, 'normal', p.isDisabled)};
    &:hover {
        transition: all ${p => p.transitions.fast};
        box-shadow: ${p => getBoxShadow(p.boxShadow, p.isDisabled, p.showBoxShadow, 'hover')};
        background-color: ${p =>
            getWrapperColorVariant(p.styleVariant, p.colorVariant, p.colors, 'hover', p.isDisabled)};
        border-color: ${p => getBorderColorVariant(p.styleVariant, p.colorVariant, p.colors, 'hover', p.isDisabled)};
    }
    &:active {
        transition: all ${p => p.transitions.fast};
        box-shadow: ${p => getBoxShadow(p.boxShadow, p.isDisabled, p.showBoxShadow, 'active')};
        background-color: ${p =>
            getWrapperColorVariant(p.styleVariant, p.colorVariant, p.colors, 'active', p.isDisabled)};
        border-color: ${p => getBorderColorVariant(p.styleVariant, p.colorVariant, p.colors, 'active', p.isDisabled)};
    }
`;

const getWrapperColorVariant = (
    styleVariant: StyleVariant,
    colorVariant: ColorVariant,
    colors: StyleConstant<'colors'>,
    uiState: UIState,
    isDisabled: boolean,
): string => {
    switch (styleVariant) {
        case 1:
            if (isDisabled) {
                return colors.neutral.cs5;
            }
            return getColorFunc(uiState)(colors, colorVariant);
        case 2:
        case 3:
            return getColorFunc(uiState)(colors, 'transparent');
    }
};

const getIconColorVariant = (
    styleVariant: StyleVariant,
    colorVariant: ColorVariant,
    colors: StyleConstant<'colors'>,
    uiState: UIState,
    isDisabled: boolean,
): string => {
    switch (styleVariant) {
        case 1:
            return getColorFunc(uiState)(colors, 'background');
        case 2:
        case 3:
            if (isDisabled) {
                return colors.neutral.cs5;
            }
            return getColorFunc(uiState)(colors, colorVariant);
    }
};

const getBorderColorVariant = (
    styleVariant: StyleVariant,
    colorVariant: ColorVariant,
    colors: StyleConstant<'colors'>,
    uiState: UIState,
    isDisabled: boolean,
): string => {
    switch (styleVariant) {
        case 1:
        case 2:
            if (isDisabled) {
                return colors.neutral.cs5;
            }
            return getColorFunc(uiState)(colors, colorVariant);
        case 3:
            return getColorFunc(uiState)(colors, 'transparent');
    }
};

const getBoxShadow = (
    boxShadow: StyleConstant<'boxShadow'>,
    isDisabled: boolean,
    showBoxShadow: boolean,
    uiState: UIState,
) => {
    if (!showBoxShadow) {
        return 'none';
    }

    if (isDisabled) {
        return boxShadow.bs2;
    }

    switch (uiState) {
        case 'normal':
            return 'none';
        case 'hover':
            return boxShadow.bs2;
        case 'active':
            return boxShadow.bs1;
    }
};
