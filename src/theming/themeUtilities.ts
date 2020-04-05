import { deepMerge } from '../utilities/deepMerge';
import { defaultThemeInputs } from './defaultThemeInputs';
import { DeepPartial } from 'ts-essentials';
import { Theme } from '../typeUtilities';
import { getTheme } from './getTheme';

// individual exports to not break backwards compatibility
export const getMergedThemeInputs = (newThemeInputs: DeepPartial<typeof defaultThemeInputs>) =>
    deepMerge<typeof defaultThemeInputs, typeof newThemeInputs>(defaultThemeInputs, newThemeInputs);

export const getThemeFromNewInputs = (newThemeInputs: DeepPartial<typeof defaultThemeInputs>): Theme => {
    return getTheme(getMergedThemeInputs(newThemeInputs));
};

// can be called with newThemeInputs in a setState function
export const updateThemeInputs = (newThemeInputs: DeepPartial<typeof defaultThemeInputs>) => (
    oldThemeInputs: DeepPartial<typeof defaultThemeInputs>,
) => deepMerge(oldThemeInputs, newThemeInputs);

export const themeUtilities = {
    getMergedThemeInputs,
    getThemeFromNewInputs,
    updateThemeInputs,
};
