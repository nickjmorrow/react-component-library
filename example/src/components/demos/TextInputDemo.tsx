import * as React from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Typography
} from "react-component-library";
import { DisplayPaper } from "../DisplayPaper";
import styled from "styled-components";

export const TextInputDemo: React.SFC = () => {
  const [value, setValue] = React.useState("");
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    console.log(e.key);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    setValue(currentValue);
  }

  const possibleWords = [
    "Minnesota", "Missouri", "Michigan", "Montana", "Mexico", "Marmalade", "Mint"
  ];

  const tvShowNames = [
    'the wire',
    '6teen',
    'spongebob squarepants',
    'scream queens',
    'dragula',
    'rupaul\'s drag race',
    'supernatural',
    'sailor moon',
    'danny phantom',
    'mr robot',
    'narcos',
    'game of thrones'
  ];

  const setValueInternal = (newValue: string) => {
    console.log('setting value: ' + newValue);
    setValue(newValue);
  }

  const myRef = React.useRef<HTMLInputElement>(null);

  // myRef.current && myRef.current.focu

  return (
    <>
      <Typography styleVariant={1}>Text Input</Typography>
      <DisplayPaper customStyle={style}>
        <InputsWrapper>
          <TextInput
            value={value}
            onChange={e => handleChange(e)}
            errors={errorSequence[pointer]}
            onKeyPress={e => handleKeyDown(e)}
            ref={myRef}
          />
          <PasswordInput
            value={value}
            onChange={(e) => handleChange(e)}
          />
        </InputsWrapper>
        <Button onClick={toggleErrors} useMargin={false}>
          Toggle Errors
        </Button>
      </DisplayPaper>
      <DisplayPaper>
        <TextInput
          value={value}
          onChange={handleChange}
          setValue={setValueInternal}
          possibleValues={tvShowNames}
        />
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
