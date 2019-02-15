import * as React from "react";
import styled from "styled-components";
import { Typography } from "~/components/atoms/Typography";
import { getStyles, ThemeContext } from "~/styleConstants";
import { IOption } from "~/types";

export const Option: React.SFC<{
  option: IOption;
  onClick(Option: IOption): void;
}> = ({ option, onClick: handleClick }) => {
  const handleClickInternal = () => {
    handleClick(option);
  };

  const theme = React.useContext(ThemeContext);
  const {
    spacing,
    colors,
    transitions,
    border: { borderRadius }
  } = getStyles(theme);

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
  spacing: ReturnType<typeof getStyles>["spacing"];
  colors: ReturnType<typeof getStyles>["colors"];
  transitions: ReturnType<typeof getStyles>["transitions"];
  borderRadius: ReturnType<typeof getStyles>["border"]["borderRadius"];
}>`
  padding: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.colors.gray.lightest};
    transition: ${p => p.transitions.fast};
    border-radius: ${p => p.borderRadius.default};
  }
`;
