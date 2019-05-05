import * as React from "react";
import styled from "styled-components";
import { ThemeContext, defaultShowBoxShadow } from "../../../styleConstants";
import { StyleConstant } from "../../../typeUtilities";
import { StyleVariant } from "../../atoms/types";
import { getFinalShowBoxShadow } from "~/styleConstants/themeUtilities";

export const AppBar: React.FC<{
  styleVariant?: StyleVariant;
  onClick?: () => void;
  children: React.ReactNode;
  showBoxShadow?: boolean;
  style?: React.CSSProperties;
}> = ({
  children,
  styleVariant = "primary",
  onClick: handleClick,
  showBoxShadow,
  style
}) => {
  const {
    colors,
    boxShadow,
    border: { borderStyle },
    spacing
  } = React.useContext(ThemeContext);

  const finalShowBoxShadow = getFinalShowBoxShadow(
    showBoxShadow,
    defaultShowBoxShadow
  );
  return (
    <Wrapper
      onClick={handleClick}
      colors={colors}
      borderStyle={borderStyle}
      styleVariant={styleVariant}
      spacing={spacing}
      boxShadow={finalShowBoxShadow ? boxShadow.bs1 : "none"}>
      <Inner style={style}>{children}</Inner>
    </Wrapper>
  );
};

const Inner = styled.div`
  margin: 0px 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

const Wrapper = styled("div")<{
  boxShadow: string;
  styleVariant: StyleVariant;
  colors: StyleConstant<"colors">;
  borderStyle: StyleConstant<"border">["borderStyle"];
  spacing: StyleConstant<"spacing">;
}>`
  width: 100%;
  position: relative;
  height: ${p => p.spacing.ss16};
  background-color: ${p => getBackgroundColor(p.colors, p.styleVariant)};
  display: flex;
  justify-content: center;
  box-shadow: ${p => p.boxShadow};
  box-sizing: border-box;
  border-top: ${p => getBorderTop(p.styleVariant, p.borderStyle, p.colors)};
`;

const getBorderTop = (
  styleVariant: StyleVariant,
  borderStyle: StyleConstant<"border">["borderStyle"],
  colors: StyleConstant<"colors">
) => {
  switch (styleVariant) {
    case "primary":
    case "secondary":
      return `${borderStyle.bs3} ${colors.core.cs5}`;
    case "tertiary":
      return "none";
  }
};

const getBackgroundColor = (
  colors: StyleConstant<"colors">,
  styleVariant: StyleVariant
) => {
  switch (styleVariant) {
    case "primary":
      return colors.core.cs5;
    case "secondary":
    case "tertiary":
      return colors.neutral.cs2;
  }
};
