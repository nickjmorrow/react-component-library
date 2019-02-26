import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
// import { Error } from "../Error";
import { EyeIcon } from "../icons/EyeIcon";
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
  placeholder = "Password"
}) => {
  type allowedInputTypes = "text" | "password";
  const [inputType, setInputType] = useState("password" as allowedInputTypes);
  const showPassword = inputType === "text";
  // TODO: add input validation
  // const [errorOnBlur] = useState("");

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
      />
      <EyeIcon
        style={{
          position: "absolute",
          right: "10px",
          top: "24px"
        }}
        colorVariant={showPassword ? "primaryDark" : "secondaryDark"}
        onClick={toggleInputType}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: min-content;
  display: flex;
  flex-direction: column;
  position: relative;
`;
