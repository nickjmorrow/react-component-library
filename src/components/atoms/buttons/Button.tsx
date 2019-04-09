import * as React from "react";
import { Link } from "~/components/atoms";
import PulseLoader from "react-spinners/PulseLoader";
import styled from "styled-components";
import { ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";
import { Fade } from "../../animations";
import { getColorFunc } from "../atomServices";
import { ColorSet, ColorVariant, StyleVariant, UIState } from "../types";
import { getFormattedTextNode } from "../typography";
import { getBackgroundColor, getBorderColor, getColor } from "./buttonServices";

interface IDisplayProps {
  colorVariant: ColorVariant;
  styleVariant: StyleVariant;
  colorSet: ColorSet;
  showBoxShadow: boolean;
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
  isDisabled: boolean;
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
  isDisabled?: boolean;
  onClick?(): void;
} & Partial<IDisplayProps> &
  Partial<ColorSet>;

export const Button: React.SFC<IButtonProps> = ({
  children,
  colorVariant = "core" as ColorVariant,
  textColorVariant = "primaryLight" as ColorVariant,
  styleVariant = "primary" as StyleVariant,
  showBoxShadow = true,
  useMargin = true,
  isFullWidth = false,
  isDisabled = false,
  isLoading = false,
  link,
  colorSet = {} as ColorSet,
  onClick: handleClick = () => {
    return;
  }
}) => {
  const handleClickInternal = () => {
    if (!isDisabled) {
      handleClick();
    }
  };
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
      isDisabled={isDisabled}
      colorVariant={colorVariant}
      styleVariant={styleVariant}
      colorSet={colorSet}
      colors={colors}
      isFullWidth={isFullWidth}
      width={width}
      height={height}
      showBoxShadow={showBoxShadow}
      useMargin={useMargin}
      onClick={handleClickInternal}
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

// TODO: don't change boxShadow amount if isDisabled = true
const StyledButton = styled("button")<
  IDisplayProps & Partial<ColorSet & React.HTMLProps<HTMLButtonElement>>
>`
  border: ${p => p.border.borderStyle.bs2};
  color: ${p =>
    p.colorSet.color ||
    getColor(p.colors, p.colorVariant, p.styleVariant, "normal", p.isDisabled)};
  background-color: ${p =>
    p.colorSet.backgroundColor ||
    getBackgroundColor(
      p.colors,
      p.colorVariant,
      p.styleVariant,
      "normal",
      p.isDisabled
    )};
  border-color: ${p =>
    p.colorSet.borderColor ||
    getBorderColor(
      p.colors,
      p.colorVariant,
      p.styleVariant,
      "normal",
      p.isDisabled
    )};
  border-radius: ${props => props.border.borderRadius.br1};
  padding: ${p => `${p.spacing.ss3} ${p.spacing.ss4}`};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${props => (props.useMargin ? props.spacing.ss4 : 0)};
  cursor: ${p => (p.isDisabled ? "not-allowed" : "pointer")};
  outline: none;
  word-wrap: no-wrap;
  box-shadow: ${p => getBoxShadow(p.boxShadow, p.isDisabled, p.showBoxShadow, 'normal')};
  min-width: ${p => p.width}px;
  min-height: ${p => p.height} / px;
  height: max-content;
  ${p => (p.isFullWidth ? "width: 100%" : "")}
  transition-property: box-shadow, background-color, border-color;
  transition: ${p => p.transition};
  &:hover {
    border-color: ${p =>
      p.colorSet.borderColorHover ||
      getBorderColor(
        p.colors,
        p.colorVariant,
        p.styleVariant,
        "hover",
        p.isDisabled
      )};
    background-color: ${p =>
      p.colorSet.backgroundColorHover ||
      getBackgroundColor(
        p.colors,
        p.colorVariant,
        p.styleVariant,
        "hover",
        p.isDisabled
      )};
    color: ${p =>
      p.colorSet.colorHover ||
      getColor(
        p.colors,
        p.colorVariant,
        p.styleVariant,
        "hover",
        p.isDisabled
      )};
    box-shadow: ${p => getBoxShadow(p.boxShadow, p.isDisabled, p.showBoxShadow, 'hover')};
    transition: ${p => !p.isDisabled && `all ${p.transition} ease-in-out`}};
  }
  &:active {
    border-color: ${p =>
      p.colorSet.borderColorActive ||
      getBorderColor(
        p.colors,
        p.colorVariant,
        p.styleVariant,
        "active",
        p.isDisabled
      )};
    background-color: ${p =>
      p.colorSet.backgroundColorActive ||
      getBackgroundColor(
        p.colors,
        p.colorVariant,
        p.styleVariant,
        "active",
        p.isDisabled
      )};
    color: ${p =>
      p.colorSet.colorActive ||
      getColor(
        p.colors,
        p.colorVariant,
        p.styleVariant,
        "active",
        p.isDisabled
      )};
    box-shadow: ${p => getBoxShadow(p.boxShadow, p.isDisabled, p.showBoxShadow, 'active')};
    transition: ${p => !p.isDisabled && `all ${p.transition} ease-in-out`}};
  }
`;

const getBoxShadow = (
  boxShadow: StyleConstant<'boxShadow'>,
  isDisabled: boolean,
  showBoxShadow: boolean,
  uiState: UIState
) => {
  if (!showBoxShadow) {
    return 'none';
  }

  if (isDisabled) {
    return boxShadow.bs2;
  }

  switch (uiState) {
    case "normal":
      return boxShadow.bs3;
    case "hover":
      return boxShadow.bs2;
    case "active":
      return boxShadow.bs1;
  }
}