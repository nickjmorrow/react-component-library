import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";
import { ColorVariant, ColorSet, StyleVariant, ColorState } from "../types";
import { Typography } from "../typography/Typography";
import { getBackgroundColorState, getBorderColorState } from "./buttonServices";
import { ButtonColorVariant } from "./types";
import PulseLoader from "react-spinners/PulseLoader";
import { Fade } from "../../animations";
import { Link } from "react-router-dom";
import { getColor } from "../atomServices";

interface IDisplayProps {
  showBoxShadow?: boolean;
  useMargin?: boolean;
  style?: React.CSSProperties;
  backgroundColorState: ColorState;
  borderColorState: ColorState;
  boxShadow: StyleConstant<"boxShadow">;
  border: StyleConstant<"border">;
  transition: string;
  isFullWidth: boolean;
  styleVariant: StyleVariant;
  spacing: StyleConstant<"spacing">;
  width: number;
  height: number;
}

type IButtonProps = {
  textColorVariant?: ColorVariant;
  colorVariant?: ButtonColorVariant;
  styleVariant?: StyleVariant;
  route?: string;
  children?: React.ReactNode;
  colorSet?: Partial<ColorSet>;
  isFullWidth?: boolean;
  isLoading?: boolean;
  link?: string;
  onClick?(): void;
} & Partial<IDisplayProps> &
  Partial<ColorSet>;

const ButtonInternal: React.SFC<IButtonProps> = ({
  children,
  colorVariant = "core",
  textColorVariant = "primaryLight",
  styleVariant = "primary",
  showBoxShadow = true,
  useMargin = true,
  isFullWidth = false,
  isLoading,
  link,
  colorSet = {} as ColorSet,
  onClick: handleClick = () => {
    return;
  }
}) => {
  const typographyColorSet =
    styleVariant === "primary"
      ? colorSet
      : {
          color: colorSet.backgroundColor,
          colorHover: colorSet.backgroundColorHover,
          colorActive: colorSet.backgroundColorActive
        };
  const formattedChildren =
    typeof children === "string" ? (
      <Typography
        colorVariant={textColorVariant}
        sizeVariant={2}
        weightVariant={2}
        isInteractive={true}
        colorSet={typographyColorSet}
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

  const backgroundColorState = getBackgroundColorState(
    colors,
    colorVariant,
    colorSet,
    styleVariant
  );

  const borderColorState = getBorderColorState(
    colors,
    colorVariant,
    colorSet,
    styleVariant
  );

  const loadingFade = (
    <>
      <Fade
        in={isLoading as boolean}
        style={{ position: "absolute" }}
        transitionVariant={"medium"}>
        <PulseLoader
          color={getColor(colors, textColorVariant)}
          size={8}
          sizeUnit={"px"}
        />
      </Fade>
      <Fade in={!isLoading} transitionVariant={"medium"}>
        {formattedChildren}
      </Fade>
    </>
  );

  const content = (
    <StyledButton
      isFullWidth={isFullWidth}
      width={width}
      height={height}
      backgroundColorState={backgroundColorState}
      borderColorState={borderColorState}
      showBoxShadow={showBoxShadow}
      useMargin={useMargin}
      onClick={handleClick}
      transition={transitions.medium}
      border={border}
      styleVariant={styleVariant}
      boxShadow={boxShadow}
      spacing={spacing}>
      <InnerWrapper width={width} height={height} ref={innerWrapperRef}>
        {isLoading != undefined ? loadingFade : formattedChildren}
      </InnerWrapper>
    </StyledButton>
  );

  return link ? (
    <Link to={link} style={{ textDecoration: "none" }}>
      {content}
    </Link>
  ) : (
    content
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
  color: ${p => (p.styleVariant === "secondary" ? p.backgroundColor : p.color)};
  background-color: ${p => p.backgroundColorState.normal};
  border-radius: ${props => props.border.borderRadius.br1};
  border: ${p => `${p.border.borderStyle.bs2} ${p.borderColorState.normal}`};
  padding: ${p => p.spacing.ss3 + " " + p.spacing.ss4};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => (props.useMargin ? props.spacing.ss4 : 0)};
  cursor: pointer;
  outline: none;
  word-wrap: no-wrap;
  box-shadow: ${props => props.showBoxShadow && props.boxShadow.bs2};
  min-width: ${p => p.width}px;
  min-height: ${p => p.height}px;
  height: max-content;
  ${p => (p.isFullWidth ? "width: 100%" : "")}
  transition: box-shadow ${p => p.transition},
    background-color ${p => p.transition}, border-color ${p => p.transition};
  &:hover {
    border-color: ${p => p.borderColorState.hover};
    background-color: ${p => p.backgroundColorState.hover};
    color: ${p =>
      p.styleVariant === "secondary" ? p.backgroundColorHover : p.colorHover};
    box-shadow: ${props => props.showBoxShadow && props.boxShadow.bs1};
    transition: all ${props => props.transition} ease-in-out;
  }
  &:active {
    border-color: ${p => p.borderColorState.active};
    background-color: ${p => p.backgroundColorState.active};
    color: ${props => props.colorActive};
    transition: all ${props => props.transition} ease-in-out;
  }
`;

export const Button = React.memo(ButtonInternal);
