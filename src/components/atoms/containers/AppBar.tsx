import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../styleConstants";
import { StyleConstant } from "../../../typeUtilities";
import { StyleVariant } from "../../atoms/types";

interface AppBarProps {
  children: React.ReactNode;
  styleVariant?: StyleVariant;
  onClick?: () => void;
}

export const AppBar: React.SFC<AppBarProps> = ({
  children,
  styleVariant = "primary",
  onClick: handleClick
}) => {
  const {
    colors,
    boxShadow,
    border: { borderStyle }
  } = React.useContext(ThemeContext);
  return (
    <Wrapper
      onClick={handleClick}
      colors={colors}
      borderStyle={borderStyle}
      styleVariant={styleVariant}
      backgroundColor={getBackgroundColor(colors, styleVariant)}
      boxShadow={boxShadow.bs1}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

const getBackgroundColor = (
  colors: StyleConstant<"colors">,
  styleVariant: StyleVariant
) => {
  return styleVariant === "primary"
    ? colors.core.main
    : colors.neutral.lightest;
};

interface DisplayProps {
  backgroundColor: string;
  boxShadow: string;
  styleVariant: StyleVariant;
  colors: StyleConstant<"colors">;
  borderStyle: StyleConstant<"border">["borderStyle"];
}

const Inner = styled.div`
  margin: 0px 16px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Wrapper = styled("div")<DisplayProps>`
  width: 100%;
  height: 50px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  box-shadow: ${props => props.boxShadow};
  ${p =>
    p.styleVariant === "secondary"
      ? `border-top: ${p.borderStyle.bs3} ${p.colors.core.main}`
      : ""}
`;
