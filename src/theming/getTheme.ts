import { ThemeInput } from '../types';

import {
    generateColorShades,
    getBorderRadius,
    getBorderStyle,
    getBoxShadow,
    getFontSize,
    getIconSize,
    getSpacingSystem,
    getTransitions,
} from '~/theming/styling/styleProviders';
import { boxShadowOffsets, colorConstants } from '~/theming/styling';
import { defaultIconColorVariant, defaultIconSizeVariant } from '~/theming/styling/styleVariants';

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
    appSettings: {
        githubUrl: themeInputs.appSettings.githubUrl,
        linkedInUrl: themeInputs.appSettings.linkedInUrl,
        portfolioUrl: themeInputs.appSettings.portfolioUrl,
        appName: themeInputs.appSettings.appName,
    },
});
