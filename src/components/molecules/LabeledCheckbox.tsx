import * as React from "react";
import styled from "styled-components";
import { InputWrapper, LabeledInputWrapper } from "~/components/atoms/inputs";
import { borderRadius, boxShadow, colors, transitions } from "~/styleConstants";
import { IOption } from "types";
import { Typography } from "~/components/atoms/Typography";
import { Checkbox } from "~/components/atoms/inputs/Checkbox";

export const LabeledCheckbox: React.SFC<IProps> = ({
  isToggled,
  option,
  onClick: handleClick
}) => {
  const handleClickInternal = () => handleClick(option);

  return (
    <LabeledInputWrapper onClick={handleClickInternal}>
      <InputWrapper>
        <CheckboxWrapper
          color={isToggled ? colors.primary.main : colors.gray.dark}>
          <Checkbox
            fill={isToggled ? colors.primary.main : colors.transparent}
          />
        </CheckboxWrapper>
      </InputWrapper>
      <Typography colorVariant={isToggled ? "primary" : "default"}>
        {option.label}
      </Typography>
    </LabeledInputWrapper>
  );
};

const width = 18;

const CheckboxWrapper = styled("div")<{ color: string }>`
  height: ${width}px;
  width: ${width}px;
  border: 1px solid ${props => props.color};
  border-radius: ${borderRadius.default};
  box-shadow: ${boxShadow.default};
  transition: border ${transitions.fast};
`;

interface IProps {
  isToggled: boolean;
  option: IOption;
  onClick(option: IOption): void;
}
