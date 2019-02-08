import * as React from "react";
import styled from "styled-components";
import { colors, boxShadow } from "~/styleConstants";

interface AppBarProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const AppBar: React.SFC<AppBarProps> = ({
  children,
  onClick: handleClick
}) => {
  return (
    <Wrapper onClick={handleClick}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

const Inner = styled.div`
  margin: 0px 16px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${colors.primary};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  box-shadow: ${boxShadow.default};
`;
