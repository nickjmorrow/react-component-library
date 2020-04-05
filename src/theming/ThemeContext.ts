import React from 'react';
import { getTheme } from './getTheme';
import { defaultThemeInputs } from './defaultThemeInputs';

export const ThemeContext = React.createContext(getTheme(defaultThemeInputs));
