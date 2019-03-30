import * as React from "react";
import styled from "styled-components";
import { Typography } from "~/components/atoms/typography";
import { ThemeContext } from "~/styleConstants";
import { IOption } from "~/types";
import { StyleConstant } from "~/typeUtilities";

export const Option: React.SFC<{
  option: IOption;
  onClick(Option: IOption): void;
}> = ({ option, onClick: handleClick }) => {
  const handleClickInternal = () => {
    handleClick(option);
  };
  const {
    spacing,
    colors,
    transitions,
    border: { borderRadius }
  } = React.useContext(ThemeContext);

  return (
    <StyledOption
      onClick={handleClickInternal}
      colors={colors}
      borderRadius={borderRadius}
      transitions={transitions}
      spacing={spacing}>
      <Typography>{option.label}</Typography>
    </StyledOption>
  );
};

const StyledOption = styled("div")<{
  spacing: StyleConstant<"spacing">;
  colors: StyleConstant<"colors">;
  transitions: StyleConstant<"transitions">;
  borderRadius: StyleConstant<"border">["borderRadius"];
}>`
  padding: ${({ spacing }) => spacing.ss3};
  cursor: pointer;
  transition: background-color ${p => p.transitions.fast};
  &:hover {
    background-color: ${p => p.colors.neutral.cs3};
    transition: background-color ${p => p.transitions.fast};
    border-radius: ${p => p.borderRadius.br1};
  }
`;
