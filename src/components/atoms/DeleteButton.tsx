import * as React from "react";
import styled from "styled-components";
import { ThemeContext, getStyles } from "../../styleConstants";
import { TrashIcon } from "./icons/TrashIcon";
import { StyleConstant } from "~/typeUtilities";

export const DeleteButton: React.SFC<{ onClick: () => void }> = ({
  onClick: handleClick
}) => {
  const { theme } = React.useContext(ThemeContext);
  const {
    colors,
    spacing,
    border: { borderRadius },
    transitions
  } = getStyles(theme);
  return (
    <StyledDeleteButton
      spacing={spacing}
      colors={colors}
      borderRadius={borderRadius}
      transitions={transitions}
      onClick={handleClick}>
      <TrashIcon />
    </StyledDeleteButton>
  );
};

interface DisplayProps {
  spacing: StyleConstant<"spacing">;
  colors: StyleConstant<"colors">;
  borderRadius: StyleConstant<"border">["borderRadius"];
  transitions: StyleConstant<"transitions">;
}

const StyledDeleteButton = styled("div")<DisplayProps>`
  width: ${props => props.spacing[2]};
  height: ${props => props.spacing[2]};
  border-radius: ${props => props.borderRadius}px;
  background-color: ${p => p.colors.core.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
