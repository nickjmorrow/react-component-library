import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { IOption } from "types";
import { Typography } from "~/components/atoms/typography/Typography";
import { StyleConstant, Fade } from "~/index";
import { ThemeContext } from "~/styleConstants";
import { Option } from "./Option";

export const Select: React.SFC<OwnProps> = ({
  onChange: handleChange,
  currentOption,
  options,
  label,
  helperText,
  error
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleIsMenuVisible = () => {
    setIsMenuVisible(isMenuVisible => !isMenuVisible);
  };

  const closeMenu = () => setIsMenuVisible(false);

  const handleClickOption = (option: IOption) => {
    closeMenu();
    handleChange(option);
  };

  const myContext = React.useContext(ThemeContext);
  const { colors, spacing, border, transitions, boxShadow } = myContext;

  const { borderStyle } = border;
  console.log(myContext);

  // TODO: use react transition group to fade out on unmount of Options
  return (
    <>
      <Wrapper onMouseLeave={closeMenu} width={spacing.ss32}>
        {label && (
          <Typography
            sizeVariant={1}
            colorVariant={error ? "danger" : "secondaryDark"}>
            {label || error}
          </Typography>
        )}
        <StyledSelect
          onClick={toggleIsMenuVisible}
          colors={colors}
          spacing={spacing}
          transitions={transitions}
          boxShadow={boxShadow}
          borderStyle={borderStyle}
          isMenuVisible={isMenuVisible}
          error={error}>
          <Typography sizeVariant={3}>{currentOption.label}</Typography>
        </StyledSelect>
        <Fade in={isMenuVisible}>
          <Options
            boxShadow={boxShadow}
            colors={colors}
            spacing={spacing}
            border={border}
            transitions={transitions}
            className="fade">
            {options.map(o => (
              <Option key={o.value} onClick={handleClickOption} option={o} />
            ))}
          </Options>
        </Fade>
        {helperText && (
          <Typography
            sizeVariant={1}
            colorVariant={error ? "danger" : "secondaryDark"}>
            {error || helperText}
          </Typography>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled("div")<{ width: string }>`
  width: ${p => p.width};
  height: 40px;
`;

interface OptionsDisplayProps {
  colors: StyleConstant<"colors">;
  spacing: StyleConstant<"spacing">;
  border: StyleConstant<"border">;
  boxShadow: StyleConstant<"boxShadow">;
  transitions: StyleConstant<"transitions">;
}

const Options = styled("div")<OptionsDisplayProps>`
  background-color: ${p => p.colors.background};
  width: inherit;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  box-shadow: ${p => p.boxShadow.bs1};
  border-radius: ${p => p.border.borderRadius.br2};
  transition: box-shadow ${p => p.transitions.slow};
  &:hover {
    box-shadow: ${p => p.boxShadow.bs2};
    transition: box-shadow ${p => p.transitions.slow};
  }
`;

// &.fade-enter {
//   opacity: 0.01;
// }
// &.fade-enter-active {
//   opacity: 1;
//   transition: all 500ms ease-in;
// }
// &.fade-exit {
//   opacity: 1;
// }
// &.fade-exit-active {
//   opacity: 0.01;
//   transition: all 500ms ease-in;
// }

interface StyledSelectDisplayProps {
  colors: StyleConstant<"colors">;
  spacing: StyleConstant<"spacing">;
  borderStyle: StyleConstant<"border">["borderStyle"];
  transitions: StyleConstant<"transitions">;
  boxShadow: StyleConstant<"boxShadow">;
  isMenuVisible: boolean;
  error?: string;
}

const StyledSelect = styled("div")<StyledSelectDisplayProps>`
  border: none;
  outline: none;
  appearance: none;
  text-indent: 1px;
  margin-bottom: ${p => p.spacing.ss1};
  padding: ${p => p.spacing.ss2};
  border-bottom: ${p => p.borderStyle.bs2}
    ${p => (p.isMenuVisible ? p.colors.core.main : p.colors.neutral.main)};
  transition: border-bottom ${p => p.transitions.medium};
  &:hover {
    border-bottom: ${p => p.borderStyle.bs2}
      ${p => (p.isMenuVisible ? p.colors.core.main : p.colors.neutral.darker)};
    transition: border-bottom ${p => p.transitions.medium};
    cursor: pointer;
  }
  &:focus,
  &:active {
    border-bottom: ${p => p.borderStyle.bs2} ${p => p.colors.core.main};
    transition: border-bottom ${p => p.transitions.medium};
  }
`;

interface OwnProps {
  options: IOption[];
  currentOption: IOption;
  includeNoneOptionAfterSelection?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  onChange(option: IOption): void;
}
