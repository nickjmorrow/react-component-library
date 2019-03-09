import * as React from "react";
import styled from "styled-components";
import { StyledInput } from "./StyledInput";

interface IOwnProps {
  value: string | number;
  placeholder?: string;
  style?: React.CSSProperties;
  errors?: string[];
  onChange(value: string): void;
}

// TODO: add isRequired and validation function with error state
export const TextInput: React.SFC<IOwnProps> = ({
  onChange: handleChange,
  value,
  placeholder,
  errors
}) => {
  const handleChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleChange(e.currentTarget.value);

  return (
    <Wrapper>
      <StyledInput
        value={value}
        onChange={handleChangeInternal}
        type={"text"}
        errors={errors}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: min-content;
  display: flex;
  flex-direction: column;
`;
