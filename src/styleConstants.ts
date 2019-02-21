import * as deepmergeProxy from "deepmerge";
import * as React from "react";
import { IconColorVariant } from "./components/atoms/icons/types";
import { DeepPartial } from "ts-essentials";
const deepmerge: typeof deepmergeProxy =
  (deepmergeProxy as any).default || deepmergeProxy;

export const defaultPrimaryPaletteDescriptor = {
  hue: 220, // hsl(220, 100%, 50%)
  middleLightness: 50,
  lightnessIncrement: 10,
  lightnessDecrement: 10,
  saturation: 55,
  hueDecrement: 0
};

const defaultSecondaryPaletteDescriptor = {
  ...defaultPrimaryPaletteDescriptor,
  hue: 190 // hsl(190, 70%, 50%)
};

const defaultGrayPaletteDescriptor = {
  ...defaultPrimaryPaletteDescriptor,
  saturation: 13,
  lightnessIncrement: 13,
  middleLightness: 55,
  hue: 200 // hsl(200, 100%, 50%)
};

const defaultRedPaletteDescriptor = {
  ...defaultPrimaryPaletteDescriptor,
  hue: 0 // hsl(10, 100%, 50%)
};

const defaultYellowPaletteDescriptor = {
  ...defaultPrimaryPaletteDescriptor,
  hue: 50, // hsl(50, 100%, 50%)
  lightnessIncrement: 10,
  lightnessDecrement: 6,
  hueDecrement: 15
};

const defaultSuccessPaletteDescriptor = {
  ...defaultPrimaryPaletteDescriptor,
  hue: 120, //hsl(120, 100%, 50%)
  saturation: 40
};

export interface ColorShade {
  lightest: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  darkest: string;
}

export const generateColorShades = (
  paletteDescriptor: Partial<typeof defaultPrimaryPaletteDescriptor>
): ColorShade => {
  const {
    hue: h = 220,
    middleLightness: l = 50,
    saturation: s = 50,
    lightnessIncrement: li = 10,
    lightnessDecrement: ld = 10,
    hueDecrement: hd = 0
  } = paletteDescriptor;
  // TODO: i think i want 9 shades and the keys should be numbers :/
  return {
    lightest: `hsl(${h}, ${s}%, ${l + 3 * li}%)`,
    lighter: `hsl(${h}, ${s}%, ${l + 2 * li}%)`,
    light: `hsl(${h}, ${s}%, ${l + li}%)`,
    main: `hsl(${h}, ${s}%, ${l}%)`,
    dark: `hsl(${h - hd}, ${s}%, ${l - ld}%)`,
    darker: `hsl(${h - 2 * hd}, ${s}%, ${l - 2 * ld}%)`,
    darkest: `hsl(${h - 3 * hd}, ${s}%, ${l - 3 * ld}%)`
  };
};

export const colors = {
  background: "rgb(255, 255, 255)",
  transparent: "transparent",
  core: generateColorShades(defaultPrimaryPaletteDescriptor),
  accent: generateColorShades(defaultSecondaryPaletteDescriptor),
  neutral: generateColorShades(defaultGrayPaletteDescriptor),
  danger: generateColorShades(defaultRedPaletteDescriptor),
  warning: generateColorShades(defaultYellowPaletteDescriptor),
  success: generateColorShades(defaultSuccessPaletteDescriptor)
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
  default: `0px 2px 6px ${colors.neutral.main}`,
  light: `0px 2px 6px ${colors.core.light}`
};

export const border = {
  default: `1px solid ${colors.core.main}`,
  bold: `3px solid ${colors.core.main}`
};

export const borderStyle = {
  default: "1px solid",
  1: "1px solid",
  2: "2px solid"
};

export const horizontalSpacing = {
  default: "1.5rem"
};

export const fontFamily = {
  default: "Roboto, sans-serif"
  // default: "Times New Roman"
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

const iconSizes: { 1: string; 2: string; 3: string; 4: string } = {
  1: "12px",
  2: "16px",
  3: "24px",
  4: "32px"
};

const defaultIconSizeVariant = 4;
const defaultIconColorVariant: IconColorVariant = "primaryDark" as IconColorVariant;

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
  spacing,
  icons: {
    iconSizes,
    defaultIconSizeVariant,
    defaultIconColorVariant
  }
};

interface contextInput {
  theme: DeepPartial<typeof defaultTheme>;
  updateTheme(newTheme: DeepPartial<typeof defaultTheme>): void;
}

export const updateTheme = (newTheme: DeepPartial<typeof defaultTheme>) =>
  deepmerge<typeof defaultTheme>(defaultTheme, newTheme as Partial<
    typeof defaultTheme
  >);
export const ThemeContext = React.createContext({
  theme: defaultTheme as DeepPartial<typeof defaultTheme>,
  updateTheme
} as contextInput);

// merge theme with defaultTheme
export const getStyles = (
  theme: DeepPartial<typeof defaultTheme>
): typeof defaultTheme =>
  (theme
    ? (deepmerge<typeof defaultTheme>(
        defaultTheme,
        theme as typeof defaultTheme
      ) as typeof defaultTheme)
    : (defaultTheme as typeof defaultTheme)) as typeof defaultTheme;
