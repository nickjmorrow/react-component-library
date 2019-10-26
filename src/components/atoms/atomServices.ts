import { StyleConstant } from '~/index';
import { ColorVariant } from '.';
import { UIState } from './types';

export const getColorHover = (colors: StyleConstant<'colors'>, colorVariant: ColorVariant) => {
    switch (colorVariant) {
        case 'primaryDark':
            return colors.neutral.cs8;
        case 'secondaryDark':
            return colors.neutral.cs7;
        case 'primaryLight':
            return colors.neutral.cs1;
        case 'secondaryLight':
            return colors.neutral.cs2;
        case 'core':
            return colors.core.cs4;
        case 'accent':
            return colors.accent.cs4;
        case 'success':
            return colors.success.cs4;
        case 'warning':
            return colors.warning.cs4;
        case 'danger':
            return colors.danger.cs4;
        case 'transparent':
            return colors.transparent;
        case 'inherit':
            return colors.inherit;
        case 'background':
            return colors.background;
    }
};

export const getColorActive = (colors: StyleConstant<'colors'>, colorVariant: ColorVariant) => {
    switch (colorVariant) {
        case 'primaryDark':
            return colors.neutral.cs7;
        case 'secondaryDark':
            return colors.neutral.cs5;
        case 'primaryLight':
            return colors.neutral.cs3;
        case 'secondaryLight':
            return colors.neutral.cs4;
        case 'core':
            return colors.core.cs7;
        case 'accent':
            return colors.accent.cs7;
        case 'success':
            return colors.success.cs7;
        case 'warning':
            return colors.warning.cs7;
        case 'danger':
            return colors.danger.cs7;
        case 'transparent':
            return colors.transparent;
        case 'inherit':
            return colors.inherit;
        case 'background':
            return colors.background;
    }
};

export const getColor = (colors: StyleConstant<'colors'>, color: ColorVariant) => {
    switch (color) {
        default:
        case 'primaryDark':
            return colors.neutral.cs7;
        case 'secondaryDark':
            return colors.neutral.cs5;
        case 'primaryLight':
            return colors.neutral.cs2;
        case 'secondaryLight':
            return colors.neutral.cs3;
        case 'core':
            return colors.core.cs5;
        case 'accent':
            return colors.accent.cs5;
        case 'success':
            return colors.success.cs5;
        case 'warning':
            return colors.warning.cs5;
        case 'danger':
            return colors.danger.cs5;
        case 'transparent':
            return colors.transparent;
        case 'inherit':
            return colors.inherit;
        case 'background':
            return colors.background;
    }
};

export const getColorFunc = (uiState: UIState) => {
    switch (uiState) {
        case 'normal':
            return getColor;
        case 'hover':
            return getColorHover;
        case 'active':
            return getColorActive;
    }
};
