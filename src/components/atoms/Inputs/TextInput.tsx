import * as React from "react";
import styled from "styled-components";
import { Error } from "../Error";
import { useState } from "react";
import { StyledInput } from "./StyledInput";

interface IOwnProps {
  value: string | number;
  placeholder?: string;
  style?: React.CSSProperties;
  onChange(value: string): void;
}

// TODO: add isRequired and validation function with error state
export const TextInput: React.SFC<IOwnProps> = ({
  onChange: handleChange,
  value,
  placeholder,
  style
}) => {
  const [errorOnBlur] = useState("");

  const handleChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleChange(e.currentTarget.value);

  return (
    <Wrapper>
      <StyledInput
        value={value}
        onChange={handleChangeInternal}
        type={"text"}
        placeholder={placeholder}
        style={style}
      />
      <Error>{errorOnBlur}</Error>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: min-content;
  display: flex;
  flex-direction: column;
`;
