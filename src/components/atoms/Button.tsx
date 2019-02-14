import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getStyles, ThemeContext } from "~/styleConstants";
import { LoadingIcon } from "./icons";
import { Typography } from "./Typography";
import { GetComponentProps } from "~/typeUtilities";

// TODO: make this the same width regardless
// of isLoading state

interface IDisplayProps {
  showBoxShadow?: boolean;
  useMargin?: boolean;
  style?: React.CSSProperties;
  backgroundColor: string;
  backgroundColorActive: string;
  backgroundColorHover: string;
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

type ColorVariant =
  | "primary"
  | "secondary"
  | "cancel"
  | "white"
  | "transparent";

type IButtonProps = {
  textColorVariant?: GetComponentProps<typeof Typography>["colorVariant"];
  colorVariant?: ColorVariant;
  route?: string;
  children: React.ReactNode;
  colorSet?: Partial<ColorSet>;
  isLoading?: boolean;
  onClick?(): void;
} & Partial<IDisplayProps> &
  Partial<ColorSet>;

// type myType = React.ComponentType<typeof Typography>['']

export const Button: React.SFC<IButtonProps> = ({
  children,
  colorVariant = "primary",
  route,
  isLoading = false,
  showBoxShadow = true,
  useMargin = true,
  textColorVariant = "textPrimaryLight",
  colorSet = {} as ColorSet,
  onClick: handleClick = () => {
    return;
  }
}) => {
  // TODO: use a ref to change uiState
  const formattedChildren =
    typeof children === "string" ? (
      <Typography
        colorVariant={textColorVariant}
        allowedUiStates={["active", "hover"]}
        sizeVariant={2}
        weightVariant={2}
        style={{ textTransform: "uppercase" }}>
        {children}
      </Typography>
    ) : (
      children
    );

  const content = isLoading ? <LoadingIcon /> : formattedChildren;

  const theme = React.useContext(ThemeContext);
  const {
    colors,
    transitions,
    boxShadow,
    border: { borderRadius }
  } = getStyles(theme);

  const button = (
    <StyledButton
      backgroundColor={
        colorSet.backgroundColor || getColor(colors, colorVariant)
      }
      backgroundColorActive={
        colorSet.backgroundColorActive || getColorActive(colors, colorVariant)
      }
      backgroundColorHover={
        colorSet.backgroundColorHover || getColorHover(colors, colorVariant)
      }
      showBoxShadow={showBoxShadow}
      useMargin={useMargin}
      onClick={handleClick}
      transition={transitions.fast}
      borderRadius={borderRadius.default}
      boxShadow={boxShadow.default}>
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

const StyledButton = styled("button")<
  IDisplayProps & Partial<ColorSet & React.HTMLProps<HTMLButtonElement>>
>`
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
    color: ${props => props.colorHover};
    transition: all ${props => props.transition};
  }
  &:active {
    background-color: ${props => props.backgroundColorActive};
    color: ${props => props.colorActive};
    transition: all ${props => props.transition};
  }
`;

const getColorHover = (
  colors: ReturnType<typeof getStyles>["colors"],
  variant: ColorVariant
) => {
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

const getColorActive = (
  colors: ReturnType<typeof getStyles>["colors"],
  variant: ColorVariant
) => {
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

const getColor = (
  colors: ReturnType<typeof getStyles>["colors"],
  variant: ColorVariant
) => {
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
