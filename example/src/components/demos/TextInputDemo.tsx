import * as React from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Typography
} from "react-component-library";
import { DisplayPaper } from "../DisplayPaper";
import styled from "styled-components";

const possibleValues = ["h", "he", "hell", "help", "helper", "hello"];

export const TextInputDemo: React.SFC = () => {
  const [value, setValue] = React.useState("");
  const [otherValue, setOtherValue] = React.useState("");
  const twoErrors = [
    "Please enter a valid email address.",
    "Something else related to the email address."
  ];
  const noErrors = [] as string[];
  const oneError = ["Some other email error"];

  const errorSequence = [noErrors, oneError, twoErrors, oneError];
  const [pointer, setPointer] = React.useState(0);

  const getNewErrors = () => {
    if (pointer === errorSequence.length - 1) {
      setPointer(0);
    } else {
      setPointer(prevPointer => prevPointer + 1);
    }
  };

  const toggleErrors = () => getNewErrors();

  const style = {
    flexDirection: "column" as "column",
    alignItems: "flex-start"
  };
  return (
    <>
      <Typography styleVariant={1}>Text Input</Typography>
      <DisplayPaper style={style}>
        <InputsWrapper>
          <TextInput
            value={value}
            onChange={setValue}
            errors={errorSequence[pointer]}
          />
          <PasswordInput value={value} onChange={setValue} />
        </InputsWrapper>
        <Button onClick={toggleErrors} useMargin={false}>
          Toggle Errors
        </Button>
      </DisplayPaper>
      <Typography styleVariant={2}>Autocomplete</Typography>
      <DisplayPaper>
        <TextInput value={otherValue} onChange={(currentOtherValue: string) => setOtherValue(currentOtherValue)} possibleValues={possibleValues} />
      </DisplayPaper>
    </>
  );
};

const InputsWrapper = styled.div`
  margin-bottom: 24px;
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 16px;
`;
