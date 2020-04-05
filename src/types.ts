import { defaultThemeInputs } from './theming/defaultThemeInputs';
import { getTheme } from './theming/getTheme';

export interface IOption {
    value: Value;
    label: string;
}

export type Value = string | number;

export type ThemeInput = typeof defaultThemeInputs;
export type Theme = ReturnType<typeof getTheme>;
