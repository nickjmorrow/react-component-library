import { ThemeInput } from '../types';
import { boxShadowOffsets, colorConstants } from './styleConstants';
import {
    generateColorShades,
    getBorderRadius,
    getBorderStyle,
    getBoxShadow,
    getFontSize,
    getIconSize,
    getSpacingSystem,
    getTransitions,
} from './styleProviders';
import { defaultIconColorVariant, defaultIconSizeVariant } from './styleVariants';

export const getTheme = (themeInputs: ThemeInput) => ({
    colors: {
        background: colorConstants.background,
        transparent: colorConstants.transparent,
        inherit: colorConstants.inherit,
        core: generateColorShades(themeInputs.colors.core),
        accent: generateColorShades(themeInputs.colors.accent),
        neutral: generateColorShades(themeInputs.colors.neutral),
        success: generateColorShades(themeInputs.colors.success),
        warning: generateColorShades(themeInputs.colors.warning),
        danger: generateColorShades(themeInputs.colors.danger),
    },
    transitions: getTransitions(themeInputs.transitions),
    boxShadow: getBoxShadow(boxShadowOffsets, colorConstants.shadow),
    defaultShowBoxShadow: themeInputs.defaultShowBoxShadow,
    border: {
        borderRadius: getBorderRadius(themeInputs.border.borderRadius),
        borderStyle: getBorderStyle(themeInputs.border.borderStyle),
    },
    typography: {
        fontSizes: getFontSize(themeInputs.typography.fontSizes),
        fontFamily: themeInputs.typography.fontFamily,
        fontWeights: themeInputs.typography.fontWeights,
        lineHeight: themeInputs.typography.lineHeight,
    },
    spacing: getSpacingSystem(themeInputs.spacing),
    horizontalWidth: themeInputs.horizontalWidth,
    icons: {
        iconSizes: getIconSize(themeInputs.icons.iconSizes),
        defaultIconSizeVariant,
        defaultIconColorVariant,
    },
});
