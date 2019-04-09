import * as React from "react";
import { AddIcon } from "../AddIcon";
import { IconProps } from "../types";
import { ColorVariant, StyleVariant } from "../../types";
import { ThemeContext } from "~/styleConstants";
import styled from "styled-components";
import { getColorFunc } from "../../atomServices";
import { StyleConstant } from "~/typeUtilities";

interface Props {
  styleVariant: StyleVariant;
}

export const AddIconButton: React.FC<IconProps & Props> = ({
  styleVariant,
  ...props
}) => {
  const { colors, transitions } = React.useContext(ThemeContext);

  return (
    <Wrapper
      colors={colors}
      transitions={transitions}
      styleVariant={styleVariant}>
      <AddIcon
        colorVariant={getIconColorVariant(styleVariant)}
        {...props}
        style={{ display: "block" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled("div")<
  Props & {
    colors: StyleConstant<"colors">;
    transitions: StyleConstant<"transitions">;
  }
>`
  border-style: 1px solid;
  border-radius: 100%;
  transition: all ${p => p.transitions.fast};
  background-color: ${p =>
    getColorFunc("normal")(p.colors, getWrapperColorVariant(p.styleVariant))};
  border-color: ${p =>
    getColorFunc("normal")(p.colors, getBorderColorVariant(p.styleVariant))};
  &:hover {
    transition: all ${p => p.transitions.fast};
    background-color: ${p =>
      getColorFunc("hover")(p.colors, getWrapperColorVariant(p.styleVariant))};
    border-color: ${p =>
      getColorFunc("hover")(p.colors, getBorderColorVariant(p.styleVariant))};
  }
  &:active {
    transition: all ${p => p.transitions.fast};
    background-color: ${p =>
      getColorFunc("active")(p.colors, getWrapperColorVariant(p.styleVariant))};
    border-color: ${p =>
      getColorFunc("active")(p.colors, getBorderColorVariant(p.styleVariant))};
  }
`;

const getWrapperColorVariant = (styleVariant: StyleVariant): ColorVariant => {
  switch (styleVariant) {
    case "primary":
      return "core";
    case "secondary":
      return "transparent";
    case "tertiary":
      return "transparent";
  }
};

const getIconColorVariant = (styleVariant: StyleVariant): ColorVariant => {
  switch (styleVariant) {
    case "primary":
      return "background";
    case "secondary":
      return "core";
    case "tertiary":
      return "core";
  }
};

const getBorderColorVariant = (styleVariant: StyleVariant): ColorVariant => {
  switch (styleVariant) {
    case "primary":
      return "core";
    case "secondary":
      return "core";
    case "tertiary":
      return "background";
  }
};
