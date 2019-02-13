import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getStyles, ThemeContext } from "~/styleConstants";
import { LoadingIcon } from "./icons";
import { Typography } from "./Typography";

// TODO: make this the same width regardless
// of isLoading state

interface IDisplayProps {
  showBoxShadow?: boolean;
  useMargin?: boolean;
  style?: React.CSSProperties;
  backgroundColor: string;
  backgroundColorActive: string;
  backgroundColorHover: string;
  color: string;
  colorActive: string;
  colorHover: string;
  boxShadow: string;
  borderRadius: string;
  transition: string;
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
  isLoading?: boolean;
  onClick?(): void;
} & Partial<IDisplayProps> &
  Partial<ColorSet>;

export const Button: React.SFC<IButtonProps> = ({
  children,
  variant = "primary",
  route,
  isLoading = false,
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

  const content = isLoading ? <LoadingIcon /> : formattedChildren;

  const theme = React.useContext(ThemeContext);
  const { colors, transitions, boxShadow, borderRadius } = getStyles(theme);

  const getColorHover = (variant: ButtonVariant) => {
    switch (variant) {
      case "primary":
        return colors.primary.light;
      case "secondary":
        return colors.secondary.light;
      case "cancel":
        return colors.red.light;
      case "white":
        return colors.white;
      case "transparent":
        return colors.transparent;
    }
  };

  const getColorActive = (variant: ButtonVariant) => {
    switch (variant) {
      case "primary":
        return colors.primary.dark;
      case "secondary":
        return colors.secondary.dark;
      case "cancel":
        return colors.red.dark;
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
        return colors.primary.main;
      case "secondary":
        return colors.secondary.main;
      case "cancel":
        return colors.red.main;
      case "transparent":
        return colors.transparent;
    }
  };

  const button = (
    <StyledButton
      color={colorSet.color || colors.white || getColor(color)}
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
      transition={transitions.fast}
      borderRadius={borderRadius.default}
      boxShadow={boxShadow.default}
      style={style}>
      {content}
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
  border-radius: ${props => props.borderRadius};
  padding: 8px 16px;
  height: 36px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  margin: ${props => (props.useMargin ? "4px" : "0px")};
  cursor: pointer;
  outline: none;
  box-shadow: ${props => props.showBoxShadow && props.boxShadow};
  width: max-content;
  min-width: 5rem;
  &:hover {
    background-color: ${props => props.backgroundColorHover};
    color: ${props => props.color};
    transition: all ${props => props.transition};
  }
  &:active {
    background-color: ${props => props.backgroundColorActive};
    color: ${props => props.color};
    transition: all ${props => props.transition};
  }
`;
