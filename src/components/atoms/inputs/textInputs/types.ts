export type AllowedInputType = "text" | "password";

export type TextInputProps = {
  value: string;
  placeholder?: string;
  type?: AllowedInputType;
  style?: React.CSSProperties;
  errors?: string[];
  onChange(value: string): void;
};
