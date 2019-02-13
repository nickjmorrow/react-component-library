import * as React from "react";
import * as deepmergeProxy from "deepmerge";
import { DeepRequired, DeepPartial } from "ts-essentials";
const deepmerge: typeof deepmergeProxy =
  (deepmergeProxy as any).default || deepmergeProxy;

const defaultPrimaryPaletteDescriptor = {
  hue: 220, // hsl(220, 100%, 50%)
  middleLightness: 50,
  lightnessIncrement: 10,
  saturation: 55
};

const defaultSecondaryPaletteDescriptor = {
  ...defaultPrimaryPaletteDescriptor,
  hue: 160 // hsl(160, 100%, 50%)
};

const defaultGrayPaletteDescriptor = {
  ...defaultPrimaryPaletteDescriptor,
  saturation: 0
};

const defaultErrorPaletteDescriptor = {
  ...defaultPrimaryPaletteDescriptor,
  hue: 50 // hsl(10, 100%, 50%)
};

interface ColorShades {
  lightest: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  darkest: string;
}

interface ShadesDescriptor {
  hue?: number;
  middleLightness?: number;
  lightnessIncrement?: number;
  saturation?: number;
}

export const generateColorShades = (
  paletteDescriptor: ShadesDescriptor
): ColorShades => {
  const {
    hue: h = 220,
    middleLightness: l = 50,
    saturation: s = 50,
    lightnessIncrement: li = 10
  } = paletteDescriptor;
  return {
    lightest: `hsl(${h}, ${s}%, ${l + 3 * li}%)`,
    lighter: `hsl(${h}, ${s}%, ${l + 2 * li}%)`,
    light: `hsl(${h}, ${s}%, ${l + li}%)`,
    main: `hsl(${h}, ${s}%, ${l}%)`,
    dark: `hsl(${h}, ${s}%, ${l - li}%)`,
    darker: `hsl(${h}, ${s}%, ${l - 2 * li}%)`,
    darkest: `hsl(${h}, ${s}%, ${l - 3 * li}%)`
  };
};

export const colors = {
  white: "rgb(255, 255, 255)",
  transparent: "transparent",
  primary: generateColorShades(defaultPrimaryPaletteDescriptor),
  secondary: generateColorShades(defaultSecondaryPaletteDescriptor),
  gray: generateColorShades(defaultGrayPaletteDescriptor),
  red: generateColorShades(defaultErrorPaletteDescriptor)
};

export const googleColors = generateColorShades({
  hue: 10,
  saturation: 70
});

export enum borderRadius {
  default = "4px",
  inner = "2px"
}

export enum padding {
  default = "4px"
}

export const transitions = {
  fast: "0.15s cubic-bezier(0.645, 0.045, 0.355, 1.000)",
  medium: "0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000)"
};

export enum iconType {
  minusCircle = "minus-circle",
  plusCircle = "plus-circle"
}

export const verticalMargin = {
  default: "4px"
};

export const boxShadow = {
  default: `0px 2px 6px ${colors.gray.main}`,
  light: `0px 2px 6px ${colors.primary.light}`
};

export const border = {
  default: `1px solid ${colors.primary.main}`,
  bold: `3px solid ${colors.primary.main}`
};

export const horizontalSpacing = {
  default: "1.5rem"
};

export const defaultTheme = {
  colors,
  transitions,
  borderRadius,
  boxShadow
};

type OptionalTheme = DeepPartial<typeof defaultTheme>;

export const ThemeContext = React.createContext(defaultTheme as OptionalTheme);

// merge theme with defaultTheme
export const getStyles = (theme: DeepPartial<typeof defaultTheme>) =>
  theme
    ? deepmerge<typeof defaultTheme>(defaultTheme, theme as DeepRequired<
        typeof theme
      >)
    : defaultTheme;
