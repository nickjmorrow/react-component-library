import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "~/styleConstants";

export const StyledInput: React.SFC<Props> = ({
  value,
  type,
  onChange: handleChange,
  placeholder = ""
}) => {
  const {
    colors,
    transitions,
    border: { borderRadius, borderStyle },
    spacing,
    typography: { fontFamily, fontSizes, fontWeights }
  } = React.useContext(ThemeContext);

  return (
    <Input
      fontSize={fontSizes.fs2}
      fontFamily={fontFamily.default}
      fontWeight={fontWeights.fw1}
      type={type}
      backgroundColor={colors.neutral.lightest}
      transition={transitions.fast}
      borderRadius={borderRadius.br1}
      focusBorderColor={colors.core.main}
      defaultBorderColor={colors.transparent}
      borderStyle={borderStyle.bs1}
      width={spacing.ss64}
      padding={spacing.ss2}
      margin={spacing.ss2}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export const Input = styled("input")<DisplayProps>`
  outline: none;
  width: ${p => p.width};
  padding: ${p => p.padding};
  background-color: ${p => p.backgroundColor};
  border-radius: ${p => p.borderRadius};
  border: ${p => p.borderStyle} ${p => p.defaultBorderColor};
  margin-top: ${p => p.margin};
  type: ${p => p.type};
  font-weight: ${p => p.fontWeight};
  font-family: ${p => p.fontFamily};
  font-size: ${p => p.fontSize};
  &:focus {
    border: ${p => p.borderStyle} ${p => p.focusBorderColor};
    transition: border ${p => p.transition};
  }
`;

type InputTypes = "text" | "password";

interface Props {
  value: React.ReactText;
  type: InputTypes;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface DisplayProps {
  borderRadius: string;
  transition: string;
  backgroundColor: string;
  defaultBorderColor: string;
  focusBorderColor: string;
  borderStyle: string;
  type: InputTypes;
  width: string;
  padding: string;
  margin: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
}
