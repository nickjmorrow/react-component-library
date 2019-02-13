import styled from "styled-components";
import * as React from "react";
import { colors, transitions } from "~/styleConstants";

interface IProps {
  isToggled: boolean;
  onClick(isChecked: boolean): void;
}

export const Toggle: React.SFC<IProps> = ({
  isToggled,
  onClick: handleClick
}) => {
  const handleClickInternal = (e: React.MouseEvent<HTMLDivElement>) =>
    handleClick(!isToggled);

  return (
    <Wrapper onClick={handleClickInternal}>
      <Switch isToggled={isToggled} />
    </Wrapper>
  );
};

const width = 40;
const height = 20;

const Wrapper = styled.div`
  height: ${height}px;
  width: ${width}px;
  background-color: ${colors.primary};
  cursor: pointer;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0px 4px;
  box-shadow: ${colors.darkGray} 0px 1px 2px -1px;
  &:hover {
    background-color: ${colors.primary.light};
    transition: ${transitions.fast};
  }
`;

interface ISwitchProps {
  isToggled: boolean;
}

const Switch = styled("div")<ISwitchProps>`
  position: relative;
  height: ${height - 5}px;
  width: ${width / 2}px;
  left: -2px;
  border-radius: ${height}px;
  transform: ${props => `translateX(${props.isToggled ? "120%" : "0%"})`};
  background-color: ${colors.lightGray};
  transition: transform ${transitions.fast} ease-in-out;
  box-shadow: ${colors.darkGray} 1px 0px 2px -1px,
    ${colors.darkGray} -1px 0px 2px -1px, ${colors.darkGray} 0px 1px 2px -1px,
    ${colors.darkGray} 0px -1px 2px -1px;
  &:hover {
    background-color: ${colors.lightGray};
  }
`;
