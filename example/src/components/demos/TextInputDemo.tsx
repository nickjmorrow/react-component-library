import * as React from "react";
import { TextInput, PasswordInput, Button } from "njm-react-component-library";
import { DisplayPaper } from "../DisplayPaper";
import styled from "styled-components";

export const InputDemo: React.SFC = () => {
  const [value, setValue] = React.useState("");
  const emailErrors = [
    "Please enter a valid email address.",
    "Something else related to the email address."
  ];
  const noErrors = [] as string[];

  const [errors, setErrors] = React.useState(emailErrors);
  const toggleErrors = () =>
    setErrors(prevErrors => (prevErrors.length === 0 ? emailErrors : noErrors));

  const style = {
    flexDirection: "column" as "column",
    alignItems: "flex-start"
  };
  return (
    <DisplayPaper customStyle={style}>
      <InputsWrapper>
        <TextInput value={value} onChange={setValue} errors={errors} />
        <PasswordInput value={value} onChange={setValue} />
      </InputsWrapper>
      <Button onClick={toggleErrors} useMargin={false}>
        Toggle Errors
      </Button>
    </DisplayPaper>
  );
};

const InputsWrapper = styled.div`
  margin-bottom: 24px;
`;
