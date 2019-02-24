import * as React from "react";
import {
  LabeledCheckboxInput,
  IOption,
  LabeledRadioButtonInput
} from "njm-react-component-library";
import styled from "styled-components";

export const LabeledInputDemo: React.SFC = () => {
  const options: IOption[] = [
    { label: "Red", value: "red" },
    { label: "Yellow", value: "yellow" },
    { label: "Bldue", value: "blue" }
  ];
  // @ts-ignore
  const [selectedOptions, setSelectedOptions] = React.useState([] as IOption[]);
  const [selectedOption, setSelectedOption] = React.useState(
    options[0] as IOption
  );
  return (
    <Wrapper>
      <LabeledCheckboxInput
        options={options}
        selectedOptions={selectedOptions}
        onClick={(newSelectedOptions: IOption[]) =>
          setSelectedOptions(newSelectedOptions)
        }
      />
      <LabeledRadioButtonInput
        options={options}
        selectedOption={selectedOption}
        onClick={(newOption: IOption) => setSelectedOption(newOption)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
`;
