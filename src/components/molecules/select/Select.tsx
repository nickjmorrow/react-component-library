import * as React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Fade, Typography } from "~/components";
import { useThemeContext } from "~/styleConstants";
import { IOption } from "~/types";
import { Option } from "./Option";
import { StyledOptionList } from "./StyledOptionList";
import { StyledSelect } from "./StyledSelect";

export const Select: React.SFC<{
  options: IOption[];
  currentOption: IOption;
  id?: string | number;
  includeNoneOptionAfterSelection?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  numVisibleOptions?: number;
  onChange(option: IOption): void;
}> = ({
  onChange: handleChange,
  currentOption,
  options,
  label,
  helperText,
  error = "",
  numVisibleOptions
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleIsMenuVisible = () =>
    setIsMenuVisible(currentIsMenuVisible => !currentIsMenuVisible);

  const handleClickOption = (option: IOption) => {
    setIsMenuVisible(false);
    handleChange(option);
  };

  const { spacing } = useThemeContext();

  // TODO: can this and handleClick be shared?
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
          isMenuVisible={isMenuVisible}
          hasError={hasError}>
          <Typography sizeVariant={3}>{currentOption.label}</Typography>
        </StyledSelect>
        {isMenuVisible && <StyledOptionList numVisibleOptions={numVisibleOptions}>
            {options.map(o => (
              <Option key={o.value} onClick={handleClickOption} option={o} />
            ))}
          </StyledOptionList>}
          
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
