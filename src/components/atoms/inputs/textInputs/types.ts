export type AllowedInputType = "text" | "password";

// TODO: this should not be shared with PasswordInput
export type TextInputProps = {
  value: string;
  placeholder?: string;
  type?: AllowedInputType;
  style?: React.CSSProperties;
  errors?: string[];
  possibleValues?: string[];
  numEligibleValues?: number;
  onChange(value: string): void;
};
