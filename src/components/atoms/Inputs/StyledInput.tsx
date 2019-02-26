import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";

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
    boxShadow,
    typography: { fontFamily, fontSizes, fontWeights }
  } = React.useContext(ThemeContext);

  return (
    <Input
      boxShadow={boxShadow}
      spacing={spacing}
      fontSize={fontSizes.fs3}
      fontFamily={fontFamily.default}
      fontWeight={fontWeights.fw1}
      type={type}
      backgroundColor={colors.neutral.lightest}
      transition={transitions.medium}
      borderRadius={borderRadius.br1}
      focusBorderColor={colors.core.main}
      defaultBorderColor={colors.transparent}
      borderStyle={borderStyle.bs1}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export const Input = styled("input")<DisplayProps>`
  outline: none;
  width: ${p => p.spacing.ss64};
  padding: ${p => p.spacing.ss3};
  background-color: ${p => p.backgroundColor};
  border-radius: ${p => p.borderRadius};
  border: ${p => p.borderStyle} ${p => p.defaultBorderColor};
  margin-top: ${p => p.spacing.ss3};
  type: ${p => p.type};
  font-weight: ${p => p.fontWeight};
  font-family: ${p => p.fontFamily};
  font-size: ${p => p.fontSize};
  transition: box-shadow ${p => p.transition};
  &:hover {
    box-shadow: ${p => p.boxShadow.bs1};
    transition: box-shadow ${p => p.transition};
  }
  &:focus {
    box-shadow: ${p => p.boxShadow.bs2};
    transition: all ${p => p.transition};
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
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  boxShadow: StyleConstant<"boxShadow">;
  spacing: StyleConstant<"spacing">;
}
