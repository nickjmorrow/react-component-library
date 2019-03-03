import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../styleConstants";
import { StyleConstant } from "../../../typeUtilities";
import { getColor, getColorHover, getIconSize } from "./iconServices";
import { IconProps } from "./types";

// TODO: think about circular dependency

interface Props {
  style?: React.CSSProperties;
  onClick?(): void;
}

export const CloseIcon: React.SFC<IOwnProps & Props & IconProps> = ({
  style,
  onClick: handleClick = () => {
    return;
  },
  colorVariant = "primaryDark",
  sizeVariant = 2
}) => {
  const {
    colors,
    transitions,
    icons: { iconSizes, defaultIconSizeVariant }
  } = React.useContext(ThemeContext);

  return (
    <Svg
      style={style}
      size={iconSizes[getIconSize(sizeVariant || defaultIconSizeVariant)]}
      color={getColor(colorVariant, colors)}
      hoverColor={getColorHover(colorVariant, colors)}
      onClick={handleClick}
      transitions={transitions}
      viewBox="0 0 1000 1000">
      <g>
        <path
          fill="currentColor"
          d="M629.3,499.1l333.5-331.8c18.1-18.1,27.2-40,27.2-65.5c0-25.5-9.1-47.1-27.2-64.7c-18.1-17.6-40-26.4-65.5-26.4s-47.4,8.5-65.5,25.5L500,369.8L168.2,36.4c-9.1-7.9-19.3-14.2-30.6-18.7s-23-6.8-34.9-6.8s-23.5,2.3-34.9,6.8S46.3,28.4,37.2,36.4C19.1,54.5,10,76.4,10,101.9c0,25.5,9.1,47.4,27.2,65.5l333.5,331.8L37.2,832.6c-18.1,17-27.2,38.3-27.2,63.8c0,25.5,9.1,47.4,27.2,65.5c18.1,18.1,40,27.2,65.5,27.2c25.5,0,47.4-9.1,65.5-27.2L500,630.2l331.8,331.8c18.1,18.1,40,27.2,65.5,27.2s47.4-9.1,65.5-27.2c18.1-18.1,27.2-40,27.2-65.5c0-25.5-9.1-46.8-27.2-63.8L629.3,499.1z"
        />
      </g>
    </Svg>
  );
};

// types
interface IOwnProps {
  style?: React.CSSProperties;
  onClick?: () => void;
}

interface IDisplayProps {
  size: string;
  color: string;
  transitions: StyleConstant<"transitions">;
  hoverColor: string;
}

const Svg = styled("svg")<IDisplayProps>`
  height: ${p => p.size};
  width: ${p => p.size};
  color: ${p => p.color};
  cursor: pointer;
  &:hover {
    transition: color ${p => p.transitions.fast};
    color: ${p => p.hoverColor};
  }
`;
