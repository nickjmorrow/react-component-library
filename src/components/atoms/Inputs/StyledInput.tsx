import * as React from "react";
import styled from "styled-components";
import { getStyles, ThemeContext } from "~/styleConstants";

export const StyledInput: React.SFC<Props> = ({
  value,
  type,
  onChange: handleChange,
  placeholder = ""
}) => {
  const { theme } = React.useContext(ThemeContext);
  const {
    colors,
    transitions,
    border: { borderRadius, borderStyle },
    spacing,
    typography: { fontFamily, fontSizes, fontWeights }
  } = getStyles(theme);

  return (
    <Input
      fontSize={fontSizes[16]}
      fontFamily={fontFamily.default}
      fontWeight={fontWeights[1]}
      type={type}
      backgroundColor={colors.neutral.lightest}
      transition={transitions.fast}
      borderRadius={borderRadius.default}
      focusBorderColor={colors.core.main}
      defaultBorderColor={colors.transparent}
      borderStyle={borderStyle.default}
      width={spacing[64]}
      padding={spacing[2]}
      margin={spacing[2]}
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
