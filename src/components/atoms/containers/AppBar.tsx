import * as React from "react";
import styled from "styled-components";
import { ThemeContext, getStyles } from "~/styleConstants";

interface AppBarProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const AppBar: React.SFC<AppBarProps> = ({
  children,
  onClick: handleClick
}) => {
  const { theme } = React.useContext(ThemeContext);
  const { colors, boxShadow } = getStyles(theme);
  return (
    <Wrapper
      onClick={handleClick}
      color={colors.background}
      backgroundColor={colors.core.main}
      boxShadow={boxShadow.default}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

interface DisplayProps {
  backgroundColor: string;
  boxShadow: string;
  color: string;
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
  color: ${props => props.color};
  display: flex;
  justify-content: center;
  box-shadow: ${props => props.boxShadow};
`;
