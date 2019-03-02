import * as React from "react";
import styled from "styled-components";
import { ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";
import { Typography } from "../typography";
import { Fade } from "~/components/animations";

export const StyledInput: React.SFC<{
  value: React.ReactText;
  type: InputTypes;
  placeholder?: string;
  errors?: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  value,
  type,
  onChange: handleChange,
  placeholder = "",
  errors = []
}) => {
  const {
    colors,
    transitions,
    border: { borderRadius, borderStyle },
    spacing,
    boxShadow,
    typography: { fontFamily, fontSizes, fontWeights }
  } = React.useContext(ThemeContext);

  const renderErrors = (error: string) => (
    <Typography
      sizeVariant={1}
      colorVariant={"danger"}
      style={{ marginTop: spacing.ss1 }}>
      {error}
    </Typography>
  );
  return (
    <>
      <Input
        boxShadow={boxShadow}
        colors={colors}
        hasErrors={errors.length > 0}
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
      <Fade in={errors.length > 0} transitionVariant={"medium"}>
        <FlexColumn>{errors.map(renderErrors)}</FlexColumn>
      </Fade>
    </>
  );
};

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled("input")<DisplayProps>`
  outline: none;
  width: ${p => p.spacing.ss64};
  padding: ${p => p.spacing.ss3};
  background-color: ${p => p.backgroundColor};
  border-radius: ${p => p.borderRadius};
  border: ${p => p.borderStyle} ${p => p.defaultBorderColor};
  border-left-width: ${p => (p.hasErrors ? "2px" : p.borderStyle)};
  border-left-color: ${p =>
    p.hasErrors ? p.colors.danger.light : p.defaultBorderColor};
  margin-top: ${p => p.spacing.ss3};
  type: ${p => p.type};
  font-weight: ${p => p.fontWeight};
  font-family: ${p => p.fontFamily};
  font-size: ${p => p.fontSize};
  box-sizing: border-box;
  transition: box-shadow ${p => p.transition},
    border-left-color ${p => p.transition};
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
  hasErrors: boolean;
  colors: StyleConstant<"colors">;
}
