import React from 'react';
import { defaultThemeInputs } from './defaultThemeInputs';

export const ThemeInputsContext = React.createContext({
    themeInputs: defaultThemeInputs,
    updateThemeInputs: (
        // @ts-ignore
        newThemeInputs: DeepPartial<typeof defaultThemeInputs>,
    ) => {
        return;
    },
});
