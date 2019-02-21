import * as React from "react";
import styled from "styled-components";
import { InputWrapper, LabeledInputWrapper } from "~/components/atoms/inputs";
import { boxShadow, colors, transitions } from "~/styleConstants";
import { IOption } from "~/types";
import { Typography } from "~/components/atoms/Typography";

export const LabeledRadioButton: React.SFC<IProps> = ({
  option,
  isChecked,
  onClick: handleClick
}) => {
  const handleClickInternal = () => {
    handleClick(option);
  };
  return (
    <LabeledInputWrapper onClick={handleClickInternal}>
      <InputWrapper>
        <RadioButton isChecked={isChecked} />
      </InputWrapper>
      <Typography colorVariant={isChecked ? "primary" : "default"}>
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
    ${props => (props.isChecked ? colors.core.main : colors.core.light)};
  box-shadow: ${boxShadow.light};
  background-color: ${props =>
    props.isChecked ? colors.core.main : colors.transparent};
  transition: background-color ${transitions.fast} ease-in-out;
`;

interface IRadioButtonProps {
  isChecked: boolean;
}

interface IProps {
  option: IOption;
  isChecked: boolean;
  onClick(option: IOption): void;
}
