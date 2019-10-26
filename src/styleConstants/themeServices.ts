import * as deepMergeProxy from 'deepmerge';
import * as React from 'react';
import { DeepPartial } from 'ts-essentials';
import { Theme } from '../types';
import { defaultThemeInputs } from './styleInputs';
import { getTheme } from './themeProvider';
const deepMerge: typeof deepMergeProxy = (deepMergeProxy as any).default || deepMergeProxy;

export const ThemeInputsContext = React.createContext({
    themeInputs: defaultThemeInputs,
    updateThemeInputs: (
        // @ts-ignore
        newThemeInputs: DeepPartial<typeof defaultThemeInputs>,
    ) => {
        return;
    },
});

export const ThemeContext = React.createContext(getTheme(defaultThemeInputs));

export const useThemeContext = () => React.useContext(ThemeContext);

export const getMergedThemeInputs = (newThemeInputs: DeepPartial<typeof defaultThemeInputs>) =>
    deepMerge<typeof defaultThemeInputs, typeof newThemeInputs>(defaultThemeInputs, newThemeInputs);

export const getThemeFromNewInputs = (newThemeInputs: DeepPartial<typeof defaultThemeInputs>): Theme => {
    return getTheme(getMergedThemeInputs(newThemeInputs));
};

// can be called with newThemeInputs in a setState function
export const updateThemeInputs = (newThemeInputs: DeepPartial<typeof defaultThemeInputs>) => (
    oldThemeInputs: DeepPartial<typeof defaultThemeInputs>,
) => deepMerge(oldThemeInputs, newThemeInputs);
