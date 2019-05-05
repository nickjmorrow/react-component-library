import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Fade, Typography, UIState } from "~/components";
import { ThemeContext } from "~/styleConstants";
import { IOption } from "~/types";
import { StyleConstant } from "~/typeUtilities";
import { Option } from "./Option";
import { StyledOptionList } from "./StyledOptionList";

export const Select: React.SFC<{
  options: IOption[];
  currentOption: IOption;
  id?: string | number;
  includeNoneOptionAfterSelection?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  onChange(option: IOption): void;
}> = ({
  onChange: handleChange,
  currentOption,
  options,
  label,
  helperText,
  error = ""
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleIsMenuVisible = () =>
    setIsMenuVisible(currentIsMenuVisible => !currentIsMenuVisible);

  const handleClickOption = (option: IOption) => {
    setIsMenuVisible(false);
    handleChange(option);
  };

  const myContext = useContext(ThemeContext);
  const { colors, spacing, border, transitions, boxShadow } = myContext;

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent | Event) => {
    // @ts-ignore
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      console.log("detected click outside, closing");

      setIsMenuVisible(false);
      return;
    }

    // @ts-ignore
    if (e.dispatchConfig === undefined) {
      return;
    }

    toggleIsMenuVisible();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false);

    return () => {
      document.removeEventListener("mousedown", handleClick, false);
    };
  }, []);

  const hasError = error.length > 0;
  const belowText = error || helperText;

  return (
    <div ref={wrapperRef}>
      <Wrapper width={spacing.ss32}>
        {label && (
          <Typography
            sizeVariant={1}
            colorVariant={error ? "danger" : "secondaryDark"}>
            {label || error}
          </Typography>
        )}
        <StyledSelect
          onClick={(e: React.MouseEvent) => handleClick(e)}
          colors={colors}
          spacing={spacing}
          transitions={transitions}
          boxShadow={boxShadow}
          border={border}
          isMenuVisible={isMenuVisible}
          hasError={hasError}>
          <Typography sizeVariant={3}>{currentOption.label}</Typography>
        </StyledSelect>
        <Fade in={isMenuVisible}>
          <StyledOptionList>
            {options.map(o => (
              <Option key={o.value} onClick={handleClickOption} option={o} />
            ))}
          </StyledOptionList>
        </Fade>
        {belowText && (
          <Typography
            sizeVariant={1}
            colorVariant={error ? "danger" : "secondaryDark"}>
            {belowText}
          </Typography>
        )}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled("div")<{ width: string }>`
  width: ${p => p.width};
  height: 40px;
`;

const StyledSelect = styled("div")<{
  colors: StyleConstant<"colors">;
  spacing: StyleConstant<"spacing">;
  border: StyleConstant<"border">;
  transitions: StyleConstant<"transitions">;
  boxShadow: StyleConstant<"boxShadow">;
  isMenuVisible: boolean;
  hasError: boolean;
}>`
  border: none;
  outline: none;
  appearance: none;
  text-indent: 1px;
  margin-bottom: ${p => p.spacing.ss1};
  padding: ${p => p.spacing.ss2};
  border-bottom: ${p =>
    `${p.border.borderStyle.bs2} ${getBorderColor(
      p.isMenuVisible,
      p.colors,
      "normal",
      p.hasError
    )}`};
  transition: border-bottom ${p => p.transitions.medium};
  &:hover {
    border-bottom: ${p =>
      `${p.border.borderStyle.bs2} ${getBorderColor(
        p.isMenuVisible,
        p.colors,
        "hover",
        p.hasError
      )}`};
    transition: border-bottom ${p => p.transitions.medium};
    cursor: pointer;
  }
  &:focus,
  &:active {
    border-bottom: ${p => p.border.borderStyle.bs2}
      ${p => getBorderColor(p.isMenuVisible, p.colors, "active", p.hasError)};
    transition: border-bottom ${p => p.transitions.medium};
  }
`;

const getBorderColor = (
  isMenuVisible: boolean,
  colors: StyleConstant<"colors">,
  uiState: UIState,
  hasError: boolean
) => {
  if (hasError) {
    return colors.danger.cs5;
  }

  if (isMenuVisible) {
    return colors.core.cs5;
  }

  return uiState === "normal" ? colors.neutral.cs5 : colors.neutral.cs7;
};
