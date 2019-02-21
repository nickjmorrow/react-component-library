import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getStyles, ThemeContext } from "~/styleConstants";
import { LoadingIcon } from "./icons";
import { Typography } from "./Typography";
import { GetComponentProps } from "~/typeUtilities";

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
  boxShadow: string;
  border: ReturnType<typeof getStyles>["border"];
  transition: string;
  useBorder: boolean;
  styleVariant: StyleVariant;
  spacing: ReturnType<typeof getStyles>["spacing"];
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

  const { theme } = React.useContext(ThemeContext);
  const { colors, transitions, boxShadow, spacing, border } = getStyles(theme);

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
      boxShadow={boxShadow.default}
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
  border-radius: ${props => props.border.borderRadius.default};
  border: ${p => p.border.borderStyle[2]} ${props => props.backgroundColor};
  padding: ${p => p.spacing[3] + " " + p.spacing[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => (props.useMargin ? props.spacing[4] : 0)};
  cursor: pointer;
  outline: none;
  box-shadow: ${props => props.showBoxShadow && props.boxShadow};
  width: max-content;
  &:hover {
    border-color: ${p => p.backgroundColorHover};
    background-color: ${p =>
      p.styleVariant === "outline" ? "none" : p.backgroundColorHover};
    color: ${props => props.colorHover};
    transition: all ${props => props.transition};
  }
  &:active {
    border-color: ${p => p.backgroundColorActive};
    background-color: ${p =>
      p.styleVariant === "outline" ? "transparent" : p.backgroundColorActive};
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
  colors: ReturnType<typeof getStyles>["colors"],
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
  colors: ReturnType<typeof getStyles>["colors"],
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
