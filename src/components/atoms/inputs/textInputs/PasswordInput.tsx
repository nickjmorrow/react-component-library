import * as React from "react";
import { useState } from "react";
import { EyeIcon } from "../../icons/EyeIcon";
import { StyledInput } from "./StyledInput";
import { TextInputProps, AllowedInputType } from "./types";


export const PasswordInput: React.SFC<TextInputProps> = ({
  onChange: handleChange,
  value,
  placeholder = "Password",
  errors,
}) => {
  const [inputType, setInputType] = useState<AllowedInputType>("password");
  const showPassword = inputType === "text";

  const toggleInputType = () =>
    setInputType(inputType === "text" ? "password" : "text");

  const handleChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleChange(e.currentTarget.value);

  return (
    <div
      style={{
        display: "flex",
        height: "min-content",
        flexDirection: "column",
        position: "relative"
      }}>
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
          top: "17px"
        }}
        colorVariant={showPassword ? "primaryDark" : "secondaryDark"}
        sizeVariant={2}
        onClick={toggleInputType}
      />
    </div>
  );
};
