// TODO: be able to override this at an app level (e.g. specify different defaults for primary, secondary, etc)
export const colors = {
  white: "rgb(255, 255, 255)",
  primary: "rgb( 48, 70,161)",
  primaryDarkest: "rgb(  4, 15, 61)",
  primaryDark: "rgb( 19, 38,113)",
  primaryLight: "rgb( 96,115,194)",
  primaryLightest: "rgb(189,198,234)",
  tertiary: "rgb(185, 37,130)",
  tertiaryDarkest: "rgb( 70,  0, 44)",
  tertiaryDark: "rgb(130,  7, 84)",
  tertiaryLight: "rgb(213, 91,167)",
  tertiaryLightest: "rgb(241,188,221)",
  secondary: "rgb(237,180, 47)",
  secondaryDarkest: "rgb( 90, 63,  0)",
  secondaryDark: "rgb(167,120,  9)",
  secondaryLight: "rgb(255,211,109)",
  secondaryLightest: "rgb(255,238,199)",
  darkGray: "hsla(0, 0%, 0%, 0.8)",
  gray: "hsla(0, 0%, 0%, 0.6)",
  lightGray: "hsla(0, 0%, 0%, 0.2)",
  lighterGray: "hsla(0, 0%, 0%, 0.1)",
  transparent: "transparent",
  red: "#E55",
  redLight: "#ED8D8D",
  redDark: "#C14747"
};

export const googleColors = {
  googleRed: "#D95434",
  googleRedLight: "#D8836F",
  googleRedDark: "#AE4229"
};

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
  default: `0px 2px 6px ${colors.lightGray}`,
  light: `0px 2px 6px ${colors.primaryLight}`
};

export const border = {
  default: `1px solid ${colors.primary}`,
  bold: `3px solid ${colors.primary}`
};

export const horizontalSpacing = {
  default: "1.5rem"
};
