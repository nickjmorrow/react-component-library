import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { EyeIcon } from "../icons/EyeIcon";
import { StyledInput } from "./StyledInput";

interface IOwnProps {
  value: string | number;
  placeholder?: string;
  type?: "text" | "password";
  style?: React.CSSProperties;
  errors?: string[];
  onChange(value: string): void;
}

export const PasswordInput: React.SFC<IOwnProps> = ({
  onChange: handleChange,
  value,
  placeholder = "Password",
  errors
}) => {
  type AllowedInputType = "text" | "password";
  const [inputType, setInputType] = useState<AllowedInputType>("password");
  const showPassword = inputType === "text";

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
        errors={errors}
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
