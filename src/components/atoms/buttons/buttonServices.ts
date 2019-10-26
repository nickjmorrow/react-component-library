import { StyleConstant } from '../../../typeUtilities';
import { getColorFunc } from '../atomServices';
import { ColorVariant, StyleVariant, UIState } from '../types';

export const getBorderColor = (
    colors: StyleConstant<'colors'>,
    colorVariant: ColorVariant,
    styleVariant: StyleVariant,
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
            return colors.transparent;
        default:
            throw new Error(`Unexpected styleVariant: ${styleVariant}`);
    }
};

export const getBackgroundColor = (
    colors: StyleConstant<'colors'>,
    colorVariant: ColorVariant,
    styleVariant: StyleVariant,
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
            return colors.transparent;
    }
};

export const getColor = (
    colors: StyleConstant<'colors'>,
    colorVariant: ColorVariant,
    styleVariant: StyleVariant,
    uiState: UIState,
    isDisabled: boolean,
) => {
    switch (styleVariant) {
        case 1:
            return colors.background;
        case 2:
        case 3:
            if (isDisabled) {
                return colors.neutral.cs5;
            }
            return getColorFunc(uiState)(colors, colorVariant);
    }
};

export const noOp = () => {
    return;
};
