import * as React from "react";
import styled, { css } from "styled-components";
import { ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";
import { ColorSet, ColorVariant } from "~/components/atoms/types";
import { getColor, getColorActive, getColorHover } from "../atomServices";
import * as deepMergeProxy from "deepmerge";
const deepMerge: typeof deepMergeProxy =
  (deepMergeProxy as any).default || deepMergeProxy;

export const Typography: React.SFC<TypographyProps> = ({
  colorVariant,
  sizeVariant,
  weightVariant,
  styleVariant,
  colorSet = {} as ColorSet,
  children,
  align = "default",
  isInteractive = false,
  style
}) => {
  const {
    colors,
    transitions,
    spacing,
    typography: { fontFamily, fontSizes, fontWeights }
  } = React.useContext(ThemeContext);

  const defaultVariants: ConcreteVariant = {
    colorVariant: "primaryDark",
    sizeVariant: 3,
    weightVariant: 4,
    style: {}
  };

  const presetVariants =
    styleVariant === undefined
      ? defaultVariants
      : (getOtherVariants(styleVariant, spacing) as ConcreteVariant);

  const selectedVariants = {
    colorVariant,
    sizeVariant,
    weightVariant,
    style
  } as Partial<ConcreteVariant>;

  const {
    newColorVariant,
    newSizeVariant,
    newWeightVariant,
    newStyle
  } = mergeVariants(presetVariants, selectedVariants);

  return (
    <StyledTypography
      color={colorSet.color || getColor(colors, newColorVariant)}
      colorActive={
        colorSet.colorActive || getColorActive(colors, newColorVariant)
      }
      colorHover={colorSet.colorHover || getColorHover(colors, newColorVariant)}
      align={align}
      fontFamily={fontFamily.default}
      transition={transitions.fast}
      fontSize={getFontSize(fontSizes, newSizeVariant)}
      fontWeight={getFontWeight(fontWeights, newWeightVariant)}
      isInteractive={isInteractive}
      style={newStyle}>
      {children}
    </StyledTypography>
  );
};

export const StyledTypography = styled("span")<DisplayProps>`
  display: inline-block;
  font-family: ${p => p.fontFamily};
  text-align: ${p => p.align};
  color: ${p => p.color};
  font-size: ${p => p.fontSize};
  font-weight: ${p => p.fontWeight};
  ${p =>
    p.isInteractive &&
    css`
      &:hover {
        color: ${p.colorHover};
        transition: color ${p.transition};
      }
      &:active {
        color: ${p.colorActive};
        transition: color ${p.transition};
      }
    `}
`;

type Align = "inherit" | "left" | "center" | "right" | "justify" | "default";
type SizeVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type WeightVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type StyleVariant = 1 | 2 | 3;

// TODO: <Code></Code> component
interface DisplayProps {
  color: string;
  align: string;
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  transition: string;
  colorHover: string;
  colorActive: string;
  isInteractive: boolean;
}

export interface TypographyProps {
  align?: Align;
  sizeVariant?: SizeVariant;
  colorVariant?: ColorVariant;
  weightVariant?: WeightVariant;
  styleVariant?: StyleVariant;
  style?: React.CSSProperties;
  colorSet?: Partial<ColorSet>;
  isInteractive?: boolean;
}

type ConcreteVariant = {
  colorVariant: ColorVariant;
  sizeVariant: SizeVariant;
  weightVariant: WeightVariant;
  style: React.CSSProperties;
};

// helpers
const getFontSize = (
  fontSizes: StyleConstant<"typography">["fontSizes"],
  sizeVariant: SizeVariant
): string => {
  return fontSizes[("fs" + sizeVariant) as keyof typeof fontSizes];
};

const getFontWeight = (
  fontWeights: StyleConstant<"typography">["fontWeights"],
  weightVariant: WeightVariant
) => {
  return fontWeights["fw" + weightVariant];
};

const getOtherVariants = (
  styleVariant: StyleVariant,
  spacing: StyleConstant<"spacing">
) => {
  switch (styleVariant) {
    case 1: {
      return {
        colorVariant: "primaryDark",
        weightVariant: 5,
        sizeVariant: 9,
        style: {
          marginBottom: spacing.ss6
        }
      };
    }
    case 2: {
      return {
        colorVariant: "primaryDark",
        weightVariant: 4,
        sizeVariant: 6,
        style: {
          marginBottom: spacing.ss4
        }
      };
    }
    case 3: {
      return {
        colorVariant: "secondaryDark",
        weightVariant: 3,
        sizeVariant: 4,
        style: {
          marginBottom: spacing.ss4
        }
      };
    }
  }
};

const mergeVariants = (
  presetVariants: ConcreteVariant,
  selectedVariants: Partial<ConcreteVariant>
) => {
  const mergedVariants = deepMerge.all([
    presetVariants,
    removeUndefined<ConcreteVariant>(selectedVariants)
  ]) as ConcreteVariant;
  const {
    colorVariant: mergedColorVariant,
    sizeVariant: mergedSizeVariant,
    weightVariant: mergedWeightVariant,
    style: mergedStyle
  } = mergedVariants;
  return {
    newColorVariant: mergedColorVariant,
    newSizeVariant: mergedSizeVariant,
    newWeightVariant: mergedWeightVariant,
    newStyle: mergedStyle
  };
};

const removeUndefined = <T extends {}>(obj: Partial<T>): Partial<T> => {
  Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);
  return obj;
};
