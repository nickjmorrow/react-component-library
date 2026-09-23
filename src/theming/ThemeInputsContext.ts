import React from 'react';
import { DeepPartial } from 'ts-essentials';
import { defaultThemeInputs } from './defaultThemeInputs';

type UpdateThemeInputs = (newThemeInputs: DeepPartial<typeof defaultThemeInputs>) => void;

export const ThemeInputsContext = React.createContext<{
    themeInputs: typeof defaultThemeInputs;
    updateThemeInputs: UpdateThemeInputs;
}>({
    themeInputs: defaultThemeInputs,
    updateThemeInputs: () => {
        return;
    },
});
