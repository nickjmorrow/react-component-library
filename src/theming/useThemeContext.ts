import React from 'react';
import { ThemeContext } from '~/theming/ThemeContext';

export const useThemeContext = () => React.useContext(ThemeContext);
