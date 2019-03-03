import styled from "styled-components";
import { ThemeContext } from "../../../styleConstants";
import * as React from "react";
import { StyleConstant } from "../../../typeUtilities";

export const LabeledInputWrapper: React.SFC<{ onClick: () => void }> = ({
  children,
  onClick: handleClick
}) => {
  const { spacing } = React.useContext(ThemeContext);
  return (
    <StyledLabeledInputWrapper spacing={spacing} onClick={handleClick}>
      {children}
    </StyledLabeledInputWrapper>
  );
};

const StyledLabeledInputWrapper = styled("div")<{
  spacing: StyleConstant<"spacing">;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  height: 20px;
  margin: ${p => p.spacing.ss4} 0px;
`;
