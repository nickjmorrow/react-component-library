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

export const getTheme = (themeInputs: ThemeInput) => {
    const { mode } = themeInputs;
    const neutral = generateColorShades(themeInputs.colors.neutral, mode);
    const { hue, saturation, saturationIncrement } = themeInputs.colors.neutral;
    const brightNeutral = (lightness: number) => `hsl(${hue}, ${saturation + 8 * saturationIncrement}%, ${lightness}%)`;
    return {
        mode,
        colors: {
            // In dark mode the background is the neutral scale's darkest shade, as it is its lightest (white) in light mode.
            background: mode === 'dark' ? neutral.cs1 : colorConstants.background,
            transparent: colorConstants.transparent,
            inherit: colorConstants.inherit,
            core: generateColorShades(themeInputs.colors.core, mode),
            accent: generateColorShades(themeInputs.colors.accent, mode),
            neutral,
            // The light-mode neutral scale in both modes. Light text variants (primaryLight, secondaryLight)
            // sit on colored or dark fills, which don't flip in dark mode, so their text mustn't either.
            fixedNeutral: mode === 'dark' ? generateColorShades(themeInputs.colors.neutral) : neutral,
            success: generateColorShades(themeInputs.colors.success, mode),
            warning: generateColorShades(themeInputs.colors.warning, mode),
            danger: generateColorShades(themeInputs.colors.danger, mode),
            // Text on the page background (the primaryDark / secondaryDark variants). Light mode uses the
            // neutral scale directly; dark mode needs a brighter primary than any shade on the scale reaches
            // (matched to the clinical copilot site: ~94% primary, ~60% secondary).
            text:
                mode === 'dark'
                    ? {
                          primary: brightNeutral(94),
                          primaryHover: brightNeutral(99),
                          secondary: neutral.cs7,
                          secondaryHover: neutral.cs8,
                      }
                    : {
                          primary: neutral.cs7,
                          primaryHover: neutral.cs8,
                          secondary: neutral.cs5,
                          secondaryHover: neutral.cs7,
                      },
        },
        transitions: getTransitions(themeInputs.transitions),
        boxShadow: getBoxShadow(boxShadowOffsets, mode === 'dark' ? colorConstants.darkShadow : colorConstants.shadow),
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
            appUrl: themeInputs.appSettings.appUrl,
        },
    };
};
