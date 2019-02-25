import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";
import { CoreColorVariant } from "../types";
import { Typography } from "../typography/Typography";
import { getColor, getColorActive, getColorHover } from "./buttonServices";
import { ColorVariant, StyleVariant } from "./types";

// TODO: make this the same width regardless
// of isLoading state

// TODO: text should light up as soon as cursor enters button
// but it doesnt. it waits till cursor over text :/

// TODO: also think about hte case (like with FileInput) where
// you want the icon to also light up a bit on hover

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
  styleVariant: StyleVariant;
  spacing: StyleConstant<"spacing">;
  width: number;
  height: number;
}

interface ColorSet {
  color: string;
  colorHover: string;
  colorActive: string;
  backgroundColor: string;
  backgroundColorHover: string;
  backgroundColorActive: string;
}

type IButtonProps = {
  textColorVariant?: CoreColorVariant;
  colorVariant?: ColorVariant;
  styleVariant?: StyleVariant;
  route?: string;
  children: React.ReactNode;
  colorSet?: Partial<ColorSet>;
  onClick?(): void;
} & Partial<IDisplayProps> &
  Partial<ColorSet>;

// type myType = React.ComponentType<typeof Typography>['']

export const Button: React.SFC<IButtonProps> = ({
  children,
  colorVariant = "core",
  textColorVariant = "primaryLight",
  styleVariant = "primary",
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

  const { colors, transitions, boxShadow, spacing, border } = React.useContext(
    ThemeContext
  );

  const innerWrapperRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  if (innerWrapperRef && innerWrapperRef.current) {
    if (innerWrapperRef.current.clientWidth > width) {
      setWidth(innerWrapperRef.current.clientWidth);
    }

    if (innerWrapperRef.current.clientHeight > height) {
      setHeight(innerWrapperRef.current.clientHeight);
    }
  }

  return (
    <StyledButton
      width={width}
      height={height}
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
      transition={transitions.medium}
      border={border}
      styleVariant={styleVariant}
      boxShadow={boxShadow}
      spacing={spacing}>
      <InnerWrapper width={width} height={height} ref={innerWrapperRef}>
        {formattedChildren}
      </InnerWrapper>
    </StyledButton>
  );
};

const InnerWrapper = styled("div")<{ width: number; height: number }>`
  min-width: ${p => p.width}px;
  min-height: ${p => p.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled("button")<
  IDisplayProps & Partial<ColorSet & React.HTMLProps<HTMLButtonElement>>
>`
  color: ${props => props.color};
  background-color: ${p =>
    p.styleVariant === "secondary" ? "transparent" : p.backgroundColor};
  border-radius: ${props => props.border.borderRadius.br1};
  border: ${p => `${p.border.borderStyle.bs2} ${p.backgroundColor}`};
  padding: ${p => p.spacing.ss3 + " " + p.spacing.ss4};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => (props.useMargin ? props.spacing.ss4 : 0)};
  cursor: pointer;
  outline: none;
  box-shadow: ${props => props.showBoxShadow && props.boxShadow.bs2};
  min-width: ${p => p.width}px;
  min-height: ${p => p.height}px;
  transition: box-shadow ${p => p.transition},
    background-color ${p => p.transition}, border-color ${p => p.transition};
  &:hover {
    border-color: ${p =>
      p.styleVariant === "secondary"
        ? p.backgroundColor
        : p.backgroundColorHover};
    background-color: ${p =>
      p.styleVariant === "secondary" ? "none" : p.backgroundColorHover};
    color: ${props => props.colorHover};
    box-shadow: ${props => props.showBoxShadow && props.boxShadow.bs1};
    transition: all ${props => props.transition} ease-in-out;
  }
  &:active {
    border-color: ${p =>
      p.styleVariant === "secondary"
        ? p.backgroundColor
        : p.backgroundColorActive};
    background-color: ${p =>
      p.styleVariant === "secondary" ? "transparent" : p.backgroundColorActive};
    color: ${props => props.colorActive};
    transition: all ${props => props.transition} ease-in-out;
  }
`;
