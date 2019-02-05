import * as React from "react";
import styled from "styled-components";
import { colors, transitions, borderRadius, boxShadow } from "styleConstants";
import { Typography } from "./Typography";
import { Link } from "react-router-dom";

interface IDisplayProps {
  color: ButtonVariant;
  backgroundColor: ButtonVariant;
  showBoxShadow?: boolean;
  useMargin?: boolean;
  style?: React.CSSProperties;
}

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "cancel"
  | "white"
  | "transparent"
  | "google";

export type IButtonProps = {
  color?: ButtonVariant;
  variant?: ButtonVariant;
  route?: string;
  children: React.ReactNode;
  onClick?(): void;
} & Partial<IDisplayProps>;

export const Button: React.SFC<IButtonProps> = ({
  children,
  variant = "primary" as ButtonVariant,
  route,
  showBoxShadow = true,
  useMargin = true,
  color = "white" as ButtonVariant,
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
      color={color}
      backgroundColor={variant}
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

const StyledButton = styled("button")<IDisplayProps>`
  color: ${props => getColor(props.color)};
  background-color: ${props => getColor(props.backgroundColor)};
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
    background-color: ${props => getColorHover(props.backgroundColor)};
    color: ${props => getColorHover(props.color)};
    transition: all ${transitions.fast};
  }
  &:active {
    background-color: ${props => getColorActive(props.backgroundColor)};
    color: ${props => getColorActive(props.color)};
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
    case "google":
      return colors.googleRedLight;
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
    case "google":
      return colors.googleRedDark;
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
      return colors.tertiaryDark;
    case "transparent":
      return colors.transparent;
    case "google":
      return colors.googleRed;
  }
};
