import * as React from "react";
import styled from "styled-components";
import { colors, transitions, borderRadius } from "~/styleConstants";
import { IOption } from "~/types";
import { Typography } from "~/components/atoms/Typography";

export const Option: React.SFC<IProps> = ({ option, onClick: handleClick }) => {
  const { label } = option;

  const handleClickInternal = () => {
    handleClick(option);
  };

  return (
    <StyledOption onClick={handleClickInternal}>
      <Typography>{label}</Typography>
    </StyledOption>
  );
};

const StyledOption = styled.div`
  padding: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.gray.light};
    transition: ${transitions.medium};
    border-radius: ${borderRadius.default};
  }
`;

interface IProps {
  option: IOption;
  onClick(Option: IOption): void;
}
