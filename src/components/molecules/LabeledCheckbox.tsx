import * as React from "react";
import styled from "styled-components";
import { IOption } from "types";
import { InputWrapper, LabeledInputWrapper } from "~/components/atoms/inputs";
import { Checkbox } from "~/components/atoms/inputs/Checkbox";
import { Typography } from "~/components/atoms/Typography";
import { ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";

export const LabeledCheckbox: React.SFC<IProps> = ({
  isToggled,
  option,
  onClick: handleClick
}) => {
  const handleClickInternal = () => handleClick(option);

  const {
    boxShadow,
    transitions,
    border: { borderRadius },
    colors
  } = React.useContext(ThemeContext);

  return (
    <LabeledInputWrapper onClick={handleClickInternal}>
      <InputWrapper>
        <CheckboxWrapper
          boxShadow={boxShadow}
          transitions={transitions}
          borderRadius={borderRadius}
          color={isToggled ? colors.core.main : colors.neutral.dark}>
          <Checkbox fill={isToggled ? colors.core.main : colors.transparent} />
        </CheckboxWrapper>
      </InputWrapper>
      <Typography colorVariant={isToggled ? "primary" : "default"}>
        {option.label}
      </Typography>
    </LabeledInputWrapper>
  );
};

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
  transition: border ${p => p.transitions.fast};
`;

interface IProps {
  isToggled: boolean;
  option: IOption;
  onClick(option: IOption): void;
}
