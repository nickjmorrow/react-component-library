import * as React from "react";
import { StyledInput } from "./StyledInput";
import { TextInputProps } from "./types";

export const TextInput: React.SFC<TextInputProps> = ({
  onChange: handleChange,
  value,
  placeholder,
  errors,
  style
}) => {
  const handleChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleChange(e.currentTarget.value);

  return (
    <div
      style={{
        height: "min-content",
        display: "flex",
        flexDirection: "column"
      }}>
      <StyledInput
        value={value}
        onChange={handleChangeInternal}
        type={"text"}
        errors={errors}
        placeholder={placeholder}
        style={style}
      />
    </div>
  );
};
