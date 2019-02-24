import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "~/styleConstants";
import { LoadingIcon } from "./icons";
import { Typography } from "./Typography";
import { GetComponentProps, StyleConstant } from "~/typeUtilities";

// TODO: make this the same width regardless
// of isLoading state

// TODO: text should light up as soon as cursor enters button
// but it doesnt. it waits till cursor over text :/

interface IDisplayProps {
  showBoxShadow?: boolean;
  useMargin?: boolean;
  style?: React.CSSProperties;
  backgroundColor: string;
  backgroundColorActive: string;
  backgroundColorHover: string;
  boxShadow: StyleConstant<"boxShadow">;
  border: StyleConstant<"border">;
  transition: string;
  useBorder: boolean;
  styleVariant: StyleVariant;
  spacing: StyleConstant<"spacing">;
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

// TODO: finish this for outline and make it extendable
type StyleVariant = "default" | "outline";

type IButtonProps = {
  textColorVariant?: GetComponentProps<typeof Typography>["colorVariant"];
  colorVariant?: ColorVariant;
  styleVariant?: StyleVariant;
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
  textColorVariant = "textPrimaryLight",
  styleVariant = "default",
  route,
  isLoading = false,
  showBoxShadow = true,
  useMargin = true,
  colorSet = {} as ColorSet,
  onClick: handleClick = () => {
    return;
  }
}) => {
  // TODO: use a ref to change uiState
  // remember: text only lights up when hovering over text
  // but we want it to light up when hovering over button

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

  const { colors, transitions, boxShadow, spacing, border } = React.useContext(
    ThemeContext
  );

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
      border={border}
      useBorder={styleVariant === "outline"}
      styleVariant={styleVariant}
      boxShadow={boxShadow}
      spacing={spacing}>
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
  background-color: ${p =>
    p.styleVariant === "outline" ? "transparent" : p.backgroundColor};
  border-radius: ${props => props.border.borderRadius.br1};
  border: ${p =>
    p.styleVariant === "outline"
      ? `${p.border.borderStyle.bs2} ${p.backgroundColor}`
      : "none"};
  padding: ${p => p.spacing.ss3 + " " + p.spacing.ss4};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => (props.useMargin ? props.spacing.ss4 : 0)};
  cursor: pointer;
  outline: none;
  box-shadow: ${props => props.showBoxShadow && props.boxShadow.bs2},
    ${p =>
      p.styleVariant === "default" &&
      `inset 0 2px 0 ${p.backgroundColorHover}`};
  width: max-content;
  transition: box-shadow ${p => p.transition},
    background-color ${p => p.transition};
  &:hover {
    border-color: ${p => p.backgroundColorHover};
    background-color: ${p =>
      p.styleVariant === "outline" ? "none" : p.backgroundColorHover};
    color: ${props => props.colorHover};
    box-shadow: ${props => props.showBoxShadow && props.boxShadow.bs1};
    transition: all ${props => props.transition} ease-in-out;
  }
  &:active {
    border-color: ${p => p.backgroundColorActive};
    background-color: ${p =>
      p.styleVariant === "outline" ? "transparent" : p.backgroundColorActive};
    color: ${props => props.colorActive};
    transition: all ${props => props.transition} ease-in-out;
  }
`;

const getColorHover = (
  colors: StyleConstant<"colors">,
  variant: ColorVariant
) => {
  switch (variant) {
    case "primary":
      return colors.core.light;
    case "secondary":
      return colors.accent.light;
    case "cancel":
      return colors.danger.light;
    case "white":
      return colors.background;
    case "transparent":
      return colors.transparent;
  }
};

const getColorActive = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "primary":
      return colors.core.dark;
    case "secondary":
      return colors.accent.dark;
    case "cancel":
      return colors.danger.dark;
    case "white":
      return colors.background;
    case "transparent":
      return colors.transparent;
  }
};

const getColor = (
  colors: StyleConstant<"colors">,
  colorVariant: ColorVariant
) => {
  switch (colorVariant) {
    case "white":
      return colors.background;
    case "primary":
      return colors.core.main;
    case "secondary":
      return colors.accent.main;
    case "cancel":
      return colors.danger.main;
    case "transparent":
      return colors.transparent;
  }
};
