import * as React from "react";
import styled from "styled-components";
import { colors, transitions, borderRadius, boxShadow } from "~/styleConstants";
import { Typography } from "./Typography";
import { Link } from "react-router-dom";

interface IDisplayProps {
  showBoxShadow?: boolean;
  useMargin?: boolean;
  style?: React.CSSProperties;
}

interface ColorSet {
  color: string;
  colorHover: string;
  colorActive: string;
  backgroundColor: string;
  backgroundColorHover: string;
  backgroundColorActive: string;
}

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "cancel"
  | "white"
  | "transparent";

export type IButtonProps = {
  color?: ButtonVariant;
  variant?: ButtonVariant;
  route?: string;
  children: React.ReactNode;
  colorSet?: Partial<ColorSet>;
  onClick?(): void;
} & Partial<IDisplayProps> &
  Partial<ColorSet>;

export const Button: React.SFC<IButtonProps> = ({
  children,
  variant = "primary",
  route,
  showBoxShadow = true,
  useMargin = true,
  color = "white",
  colorSet = {} as ColorSet,
  style,
  onClick: handleClick = () => {
    return;
  }
}) => {
  const formattedChildren =
    typeof children === "string" ? (
      <Typography color="inherit" variant="button">
        {children}
      </Typography>
    ) : (
      children
    );

  const button = (
    <StyledButton
      color={colorSet.color || getColor(color)}
      colorActive={colorSet.colorActive || getColorActive(color)}
      colorHover={colorSet.colorHover || getColorHover(color)}
      backgroundColor={colorSet.backgroundColor || getColor(variant)}
      backgroundColorActive={
        colorSet.backgroundColorActive || getColorActive(variant)
      }
      backgroundColorHover={
        colorSet.backgroundColorHover || getColorHover(variant)
      }
      showBoxShadow={showBoxShadow}
      useMargin={useMargin}
      onClick={handleClick}
      style={style}>
      {formattedChildren}
    </StyledButton>
  );

  return route ? (
    <Link to={route} style={{ textDecoration: "none" }}>
      {button}
    </Link>
  ) : (
    button
  );
};

const StyledButton = styled("button")<IDisplayProps & ColorSet>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border-radius: ${borderRadius.default};
  padding: 8px 16px;
  height: 36px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  margin: ${props => (props.useMargin ? "4px" : "0px")};
  cursor: pointer;
  outline: none;
  box-shadow: ${props => props.showBoxShadow && boxShadow.default};
  width: max-content;
  &:hover,
  &:focus {
    background-color: ${props => props.backgroundColorHover};
    color: ${props => props.color};
    transition: all ${transitions.fast};
  }
  &:active {
    background-color: ${props => props.backgroundColorActive};
    color: ${props => props.color};
    transition: all ${transitions.fast};
  }
`;

// helpers
const getColorHover = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return colors.primaryLight;
    case "secondary":
      return colors.secondaryLight;
    case "cancel":
      return colors.tertiaryLight;
    case "white":
      return colors.white;
    case "transparent":
      return colors.transparent;
  }
};

const getColorActive = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return colors.primaryDark;
    case "secondary":
      return colors.secondaryDark;
    case "cancel":
      return colors.tertiaryDark;
    case "white":
      return colors.white;
    case "transparent":
      return colors.transparent;
  }
};

const getColor = (variant: ButtonVariant) => {
  switch (variant) {
    case "white":
      return colors.white;
    case "primary":
      return colors.primary;
    case "secondary":
      return colors.secondary;
    case "cancel":
      return colors.tertiary;
    case "transparent":
      return colors.transparent;
  }
};
