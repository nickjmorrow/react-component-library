import * as deepmergeProxy from "deepmerge";
import * as React from "react";
import { DeepPartial, DeepRequired } from "ts-essentials";
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
  hue: 190 // hsl(190, 70%, 50%)
};

const defaultGrayPaletteDescriptor = {
  ...defaultPrimaryPaletteDescriptor,
  saturation: 0,
  lightnessIncrement: 13,
  middleLightness: 57
};

const defaultRedPaletteDescriptor = {
  ...defaultPrimaryPaletteDescriptor,
  hue: 0 // hsl(10, 100%, 50%)
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
  red: generateColorShades(defaultRedPaletteDescriptor)
};

export const googleColors = generateColorShades({
  hue: 10,
  saturation: 70
});

const spacingUnit = 4;

export const getSpacingSystem = (spacingUnit: number) => ({
  1: spacingUnit + "px",
  2: 2 * spacingUnit + "px",
  3: 3 * spacingUnit + "px",
  4: 4 * spacingUnit + "px",
  6: 6 * spacingUnit + "px",
  8: 8 * spacingUnit + "px",
  12: 12 * spacingUnit + "px",
  16: 16 * spacingUnit + "px",
  24: 24 * spacingUnit + "px",
  32: 32 * spacingUnit + "px",
  48: 48 * spacingUnit + "px",
  64: 64 * spacingUnit + "px",
  96: 96 * spacingUnit + "px",
  128: 128 * spacingUnit + "px",
  160: 160 * spacingUnit + "px",
  192: 192 * spacingUnit + "px"
});

const spacing = getSpacingSystem(spacingUnit);

export const borderRadius = {
  default: "4px",
  inner: "2px"
};

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

export const borderStyle = {
  default: "1px solid"
};

export const horizontalSpacing = {
  default: "1.5rem"
};

export const fontFamily = {
  default: "Roboto, sans-serif"
};

export const fontSizes = {
  12: "12px",
  14: "14px",
  16: "16px",
  18: "18px",
  20: "20px",
  24: "24px",
  30: "30px",
  36: "36px",
  48: "48px",
  60: "60px",
  72: "72px"
};

export const fontWeights = {
  1: "400",
  2: "600",
  3: "800"
};

export const defaultTheme = {
  colors,
  transitions,
  boxShadow,
  border: {
    borderRadius,
    borderStyle
  },
  typography: {
    fontSizes,
    fontFamily,
    fontWeights
  },
  spacing
};

type OptionalTheme = DeepPartial<typeof defaultTheme>;

export const ThemeContext = React.createContext(defaultTheme as OptionalTheme);

// merge theme with defaultTheme
export const getStyles = (theme: DeepPartial<typeof defaultTheme>) =>
  (theme
    ? (deepmerge<typeof defaultTheme>(defaultTheme, theme as DeepRequired<
        typeof theme
      >) as typeof defaultTheme)
    : (defaultTheme as typeof defaultTheme)) as typeof defaultTheme;
