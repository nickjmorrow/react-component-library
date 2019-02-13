import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../styleConstants";
import { EyeIcon } from "../icons/EyeIcon";
import { Error } from "../Error";
import { StyledInput } from "./StyledInput";

interface IOwnProps {
  value: string | number;
  placeholder?: string;
  type?: "text" | "password";
  style?: React.CSSProperties;
  onChange(value: string): void;
}

// TODO: add isRequired and validation function with error state
export const PasswordInput: React.SFC<IOwnProps> = ({
  onChange: handleChange,
  value,
  placeholder = "Password",
  style
}) => {
  type allowedInputTypes = "text" | "password";
  const [inputType, setInputType] = useState("password" as allowedInputTypes);
  const showPassword = inputType === "text";
  // TODO: add input validation
  const [errorOnBlur] = useState("");

  const toggleInputType = () =>
    setInputType(inputType === "text" ? "password" : "text");

  const handleChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleChange(e.currentTarget.value);

  return (
    <Wrapper>
      <StyledInput
        value={value}
        onChange={handleChangeInternal}
        type={inputType}
        placeholder={placeholder}
        style={style}
      />
      <EyeIcon
        style={{
          position: "absolute",
          right: "53px",
          bottom: "213px",
          color: showPassword ? colors.gray.dark : colors.gray.main
        }}
        onClick={toggleInputType}
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
