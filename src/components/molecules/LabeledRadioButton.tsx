import * as React from "react";
import styled from "styled-components";
import { InputWrapper, LabeledInputWrapper } from "~/components/atoms/inputs";
import { Typography } from "~/components/atoms/typography/Typography";
import { ThemeContext } from "~/styleConstants";
import { IOption } from "~/types";
import { StyleConstant } from "~/typeUtilities";

export const LabeledRadioButton: React.SFC<IProps> = ({
  option,
  isChecked,
  onClick: handleClick
}) => {
  const handleClickInternal = () => {
    handleClick(option);
  };
  const { boxShadow, colors, transitions } = React.useContext(ThemeContext);

  return (
    <LabeledInputWrapper onClick={handleClickInternal}>
      <InputWrapper>
        <RadioButton
          isChecked={isChecked}
          boxShadow={boxShadow}
          colors={colors}
          transitions={transitions}
        />
      </InputWrapper>
      <Typography colorVariant={isChecked ? "core" : "default"}>
        {option.label}
      </Typography>
    </LabeledInputWrapper>
  );
};

const length = 14;
const RadioButton = styled("div")<IRadioButtonProps>`
  width: ${length}px;
  height: ${length}px;
  border-radius: ${length}px;
  border: 1px solid
    ${props =>
      props.isChecked ? props.colors.core.main : props.colors.core.light};
  box-shadow: ${p => p.boxShadow.bs1};
  background-color: ${props =>
    props.isChecked ? props.colors.core.main : props.colors.transparent};
  transition: background-color ${p => p.transitions.fast} ease-in-out;
`;

interface IRadioButtonProps {
  isChecked: boolean;
  colors: StyleConstant<"colors">;
  transitions: StyleConstant<"transitions">;
  boxShadow: StyleConstant<"boxShadow">;
}

interface IProps {
  option: IOption;
  isChecked: boolean;
  onClick(option: IOption): void;
}
