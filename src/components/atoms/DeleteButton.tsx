import * as React from "react";
import styled from "styled-components";
import { colors, transitions } from "../../styleConstants";
import { TrashIcon } from "./icons/TrashIcon";

export const DeleteButton: React.SFC<IProps> = ({
  size = 18,
  onClick: handleClick,
  ...divProps
}) => {
  const iconStyle = {
    width: size / 1.5,
    height: size / 1.5,
    color: "inherit"
  };
  return (
    // @ts-ignore
    <StyledDeleteButton size={size} onClick={handleClick} {...divProps}>
      <TrashIcon style={iconStyle} />
    </StyledDeleteButton>
  );
};

const StyledDeleteButton = styled("div")<IProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size}px;
  color: ${colors.primaryLight};
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &hover {
    color: ${colors.primary};
    transition: ${transitions.medium};
  }
  &:active {
    color: ${colors.primaryDark};
    transition: ${transitions.fast};
  }
`;

type IProps = IDisplayProps & Partial<React.HTMLProps<HTMLDivElement>>;

interface IDisplayProps {
  size?: number;
  onClick(): void;
}
