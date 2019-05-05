import * as React from "react";
import { Typography } from "~/components/atoms/typography";
import { IOption } from "~/types";
import { StyledOption } from "./StyledOption";

export const Option: React.SFC<{
  option: IOption;
  onClick(Option: IOption): void;
}> = ({ option, onClick: handleClick }) => {
  const handleClickInternal = () => {
    handleClick(option);
  };

  return (
    <StyledOption onClick={handleClickInternal}>
      <Typography>{option.label}</Typography>
    </StyledOption>
  );
};
