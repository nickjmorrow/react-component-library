import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { IOption } from "types";
import { Option } from "./Option";
import { Typography } from "~/components/atoms/typography/Typography";
import { ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/index";

export const Select: React.SFC<OwnProps> = ({
  onChange: handleChange,
  currentOption,
  options
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

  const {
    colors,
    spacing,
    border: { borderStyle },
    transitions
  } = React.useContext(ThemeContext);

  return (
    <Wrapper onMouseLeave={closeMenu} width={spacing.ss32}>
      <StyledSelect
        onClick={toggleIsMenuVisible}
        colors={colors}
        spacing={spacing}
        transition={transitions.fast}
        borderStyle={borderStyle.bs1}>
        <Typography sizeVariant={3}>{currentOption.label}</Typography>
      </StyledSelect>
      {isMenuVisible && (
        <Options colors={colors} borderStyle={borderStyle.bs1}>
          {options
            .filter(o => o.value !== currentOption.value)
            .map(o => (
              <Option key={o.value} onClick={handleClickOption} option={o} />
            ))}
        </Options>
      )}
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ width: string }>`
  width: ${p => p.width};
`;

interface OptionsDisplayProps {
  colors: StyleConstant<"colors">;
  borderStyle: string;
}

const Options = styled("div")<OptionsDisplayProps>`
  background-color: ${p => p.colors.transparent};
  width: inherit;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  border: ${p => p.borderStyle} ${p => p.colors.transparent};
`;

interface StyledSelectDisplayProps {
  colors: StyleConstant<"colors">;
  spacing: StyleConstant<"spacing">;
  borderStyle: string;
  transition: string;
}

const StyledSelect = styled("div")<StyledSelectDisplayProps>`
  background-color: ${p => p.colors.transparent};
  border: none;
  outline: none;
  appearance: none;
  text-indent: 1px;
  text-overflow: "";
  border-bottom: ${p => p.borderStyle} ${p => p.colors.transparent};
  &:hover {
    border-bottom: ${p => p.borderStyle} ${p => p.colors.core.main};
    transition: ${p => p.transition};
    cursor: pointer;
  }
`;

interface OwnProps {
  options: IOption[];
  currentOption: IOption;
  includeNoneOptionAfterSelection?: boolean;
  onChange(option: IOption): void;
}
