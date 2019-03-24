import * as React from "react";
import { Link } from "~/components/atoms";
import PulseLoader from "react-spinners/PulseLoader";
import styled from "styled-components";
import { ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";
import { Fade } from "../../animations";
import { getColorFunc } from "../atomServices";
import { ColorSet, ColorVariant, StyleVariant } from "../types";
import { getFormattedTextNode } from "../typography";
import { getBackgroundColor, getBorderColor, getColor } from "./buttonServices";

interface IDisplayProps {
  colorVariant: ColorVariant;
  styleVariant: StyleVariant;
  colorSet: ColorSet;
  showBoxShadow?: boolean;
  useMargin?: boolean;
  style?: React.CSSProperties;
  boxShadow: StyleConstant<"boxShadow">;
  border: StyleConstant<"border">;
  colors: StyleConstant<"colors">;
  spacing: StyleConstant<"spacing">;
  transition: string;
  isFullWidth: boolean;
  width: number;
  height: number;
}

type IButtonProps = {
  textColorVariant?: ColorVariant;
  colorVariant?: ColorVariant;
  styleVariant?: StyleVariant;
  route?: string;
  children: React.ReactNode;
  colorSet?: Partial<ColorSet>;
  isFullWidth?: boolean;
  isLoading?: boolean;
  link?: string;
  onClick?(): void;
} & Partial<IDisplayProps> &
  Partial<ColorSet>;

export const Button: React.SFC<IButtonProps> = ({
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
  const { colors, transitions, boxShadow, spacing, border } = React.useContext(
    ThemeContext
  );

  const formattedChildren = getFormattedTextNode(children, {
    colorVariant: "inherit",
    sizeVariant: 2,
    weightVariant: 5,
    isInteractive: false,
    style: {
      textTransform: "uppercase"
    }
  });

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

  const loadingFade = (
    <>
      <Fade
        in={isLoading as boolean}
        style={{ position: "absolute" }}
        transitionVariant={"medium"}>
        <PulseLoader
          color={getColorFunc("normal")(colors, textColorVariant)}
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
      colorVariant={colorVariant}
      styleVariant={styleVariant}
      colorSet={colorSet}
      colors={colors}
      isFullWidth={isFullWidth}
      width={width}
      height={height}
      showBoxShadow={showBoxShadow}
      useMargin={useMargin}
      onClick={handleClick}
      transition={transitions.medium}
      border={border}
      boxShadow={boxShadow}
      spacing={spacing}>
      <InnerWrapper width={width} height={height} ref={innerWrapperRef}>
        {isLoading !== undefined ? loadingFade : formattedChildren}
      </InnerWrapper>
    </StyledButton>
  );

  return link ? (
    <Link route={link} style={{ textDecoration: "none" }}>
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
  border: ${p => p.border.borderStyle.bs2};
  color: ${p =>
    p.colorSet.color ||
    getColor(p.colors, p.colorVariant, p.styleVariant, "normal")};
  background-color: ${p =>
    p.colorSet.backgroundColor ||
    getBackgroundColor(p.colors, p.colorVariant, p.styleVariant, "normal")};
  border-color: ${p =>
    p.colorSet.borderColor ||
    getBorderColor(p.colors, p.colorVariant, p.styleVariant, "normal")};
  border-radius: ${props => props.border.borderRadius.br1};
  padding: ${p => `${p.spacing.ss3} ${p.spacing.ss4}`};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => (props.useMargin ? props.spacing.ss4 : 0)};
  cursor: pointer;
  outline: none;
  word-wrap: no-wrap;
  box-shadow: ${props => props.showBoxShadow && props.boxShadow.bs2};
  min-width: ${p => p.width}px;
  min-height: ${p => p.height} / px;
  height: max-content;
  ${p => (p.isFullWidth ? "width: 100%" : "")}
  transition-property: box-shadow, background-color, border-color;
  transition: ${p => p.transition};
  &:hover {
    border-color: ${p =>
      p.colorSet.borderColorHover ||
      getBorderColor(p.colors, p.colorVariant, p.styleVariant, "hover")};
    background-color: ${p =>
      p.colorSet.backgroundColorHover ||
      getBackgroundColor(p.colors, p.colorVariant, p.styleVariant, "hover")};
    color: ${p =>
      p.colorSet.colorHover ||
      getColor(p.colors, p.colorVariant, p.styleVariant, "hover")};
    box-shadow: ${props => props.showBoxShadow && props.boxShadow.bs1};
    transition: all ${props => props.transition} ease-in-out;
  }
  &:active {
    border-color: ${p =>
      p.colorSet.borderColorActive ||
      getBorderColor(p.colors, p.colorVariant, p.styleVariant, "active")};
    background-color: ${p =>
      p.colorSet.backgroundColorActive ||
      getBackgroundColor(p.colors, p.colorVariant, p.styleVariant, "active")};
    color: ${p =>
      p.colorSet.colorActive ||
      getColor(p.colors, p.colorVariant, p.styleVariant, "active")};
    transition: all ${props => props.transition} ease-in-out;
  }
`;
