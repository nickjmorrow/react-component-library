import * as React from "react";
import styled from "styled-components";
import { colors } from "../../styleConstants";
import { Omit } from "../../typeUtilities";

export const Typography: React.SFC<ITypographyProps> = ({
  color,
  align,
  variant,
  children,
  noMargin,
  style
}) => (
  <StyledTypography
    color={color}
    align={align}
    variant={variant}
    noMargin={noMargin}
    style={style}>
    {children}
  </StyledTypography>
);

export type TypographyColor =
  | "default"
  | "error"
  | "primary"
  | "secondary"
  | "tertiary"
  | "colored"
  | "inherit"
  | "light";
type Align = "inherit" | "left" | "center" | "right" | "justify";
type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "button"
  | "inherit"
  | "body";

export interface ITypographyProps {
  align?: Align;
  color?: TypographyColor;
  variant?: Variant;
  shouldWrap?: boolean;
  noMargin?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const StyledTypography = styled("span")<ITypographyProps>`
  display: inline-block;
  font-family: Roboto, sans-serif;
  text-align: ${p => p.align};
  color: ${p => getColor(p.color)};
  width: ${p => (p.shouldWrap ? "" : "max-content")};
  ${props => getVariantStyles(props)};
`;

const getVariantStyles = (props: ITypographyProps) => {
  const { variant, noMargin } = props;
  switch (variant) {
    case "h1":
      return `
				display: block;
				font-size: 2em;
				font-weight: bold;
				${!noMargin && `margin: 0.67em 0;`}
			`;
    case "h2":
      return `
				display: block;
				font-size: 1.5em;
				font-weight: bold;
				${!noMargin && `margin: 0.83em 0;`}
			`;
    case "h3":
      return `
				display: block;
				font-size: 1.17em;
				font-weight: bold;
				${!noMargin && `margin: 1em 0;`}
			`;
    case "h4":
      return `
				display: block;
				font-size: 1em;
				font-weight: bold;
				${!noMargin && `margin: 1.33em 0;`}
			`;
    case "h5":
      return `
				display: block;
				font-size: .83em;
				font-weight: bold;
				${!noMargin && `margin: 1.67em 0;`}
			`;
    case "h6":
      return `
				display: block;
				font-size: .67em;
				font-weight: bold;
				${!noMargin && `margin: 2.33em 0;`}
			`;
    case undefined:
    case "body":
      return `
				display: block;
				font-size: 1em;
			`;
    case "button":
      return `
				display: block;
				text-transform: uppercase;
				font-size: 0.875rem;
				font-weight: 600;
				letter-spacing: 0.03rem;
			`;
    case "inherit":
      return "inherit";
    default:
      throw Error(`Unexpected variant: ${variant}`);
  }
};

const getColor = (color: TypographyColor | undefined) => {
  switch (color) {
    case "primary":
      return colors.darkGray;
    case "secondary":
      return colors.gray;
    case "tertiary":
      return colors.lightGray;
    case "colored":
      return colors.primary;
    case "error":
      return colors.red;
    case "light":
      return colors.white;
    case "inherit":
      return "inherit";
    default:
      return colors.darkGray;
  }
};

export const formattedTextNode = (
  textNode: React.ReactNode,
  props: Omit<ITypographyProps, "children"> = {}
) =>
  typeof textNode === "string" ? (
    <Typography {...props}>{textNode}</Typography>
  ) : (
    textNode
  );
