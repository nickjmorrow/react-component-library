import * as React from "react";
import {
  LabeledCheckboxInput,
  IOption,
  LabeledRadioButtonInput,
  Typography,
  StyleConstant,
  ThemeContext
} from "@nickjmorrow/react-component-library";
import styled from "styled-components";
import { DisplayPaper } from "../DisplayPaper";

export const LabeledInputDemo: React.SFC = () => {
  const options: IOption[] = [
    { label: "Red", value: "red" },
    { label: "Orange", value: "orange" },
    { label: "Yellow", value: "yellow" },
    { label: "Blue", value: "blue" }
  ];

  const [selectedOptions, setSelectedOptions] = React.useState<IOption[]>([]);
  const [selectedOption, setSelectedOption] = React.useState<IOption>(
    options[0]
  );
  const { spacing } = React.useContext(ThemeContext);
  return (
    <>
      <div>
        <Typography styleVariant={1}>Labeled Input</Typography>
      </div>
      <Typography styleVariant={2}>Labeled Checkboxes</Typography>
      <Wrapper spacing={spacing}>
        <DisplayPaper>
          <LabeledCheckboxInput
            options={options}
            selectedOptions={selectedOptions}
            onClick={(newSelectedOptions: IOption[]) =>
              setSelectedOptions(newSelectedOptions)
            }
          />
        </DisplayPaper>
      </Wrapper>
      <Wrapper spacing={spacing}>
        <Typography styleVariant={2}>Labeled Checkboxes</Typography>
        <DisplayPaper>
          <LabeledRadioButtonInput
            options={options}
            selectedOption={selectedOption}
            onClick={(newOption: IOption) => setSelectedOption(newOption)}
          />
        </DisplayPaper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin-bottom: ${p => p.spacing.ss16};
`;
