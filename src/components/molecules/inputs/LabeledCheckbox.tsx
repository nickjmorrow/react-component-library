import * as React from "react";
import styled from "styled-components";
import { IOption } from "types";
import { Checkbox, Typography } from "~/components/atoms";
import { ThemeContext } from "../../../styleConstants";
import { StyleConstant } from "../../../typeUtilities";
import { LabeledInputWrapper } from "./LabeledInputWrapper";

export const LabeledCheckbox: React.SFC<{
  isToggled: boolean;
  option: IOption;
  onClick(option: IOption): void;
}> = React.memo(
  ({ isToggled, option, onClick: handleClick }) => {
    const handleClickInternal = () => handleClick(option);

    const {
      boxShadow,
      transitions,
      border: { borderRadius },
      colors
    } = React.useContext(ThemeContext);

    const renderInput = () => (
      <CheckboxWrapper
        boxShadow={boxShadow}
        transitions={transitions}
        borderRadius={borderRadius}
        color={isToggled ? colors.core.cs5 : colors.neutral.cs6}>
        <Checkbox fill={isToggled ? colors.core.cs5 : colors.transparent} />
      </CheckboxWrapper>
    );
    const renderLabel = () => (
      <Typography colorVariant={isToggled ? "core" : "primaryDark"}>
        {option.label}
      </Typography>
    );
    return (
      <LabeledInputWrapper
        onClick={handleClickInternal}
        renderInput={renderInput}
        renderLabel={renderLabel}
      />
    );
  },
  (prevProps, nextProps) => prevProps.isToggled === nextProps.isToggled
);

const width = 18;

const CheckboxWrapper = styled("div")<{
  borderRadius: StyleConstant<"border">["borderRadius"];
  boxShadow: StyleConstant<"boxShadow">;
  transitions: StyleConstant<"transitions">;
  color: string;
}>`
  height: ${width}px;
  width: ${width}px;
  border: 1px solid ${props => props.color};
  border-radius: ${p => p.borderRadius.br1};
  box-shadow: ${p => p.boxShadow.bs1};
  transition: border ${p => p.transitions.medium};
`;
