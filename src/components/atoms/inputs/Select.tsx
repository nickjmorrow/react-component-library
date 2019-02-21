import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { IOption } from "types";
import { Option } from "./Option";
import { Typography } from "~/components/atoms/Typography";
import { getStyles, ThemeContext } from "~/styleConstants";

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

  const { theme } = React.useContext(ThemeContext);
  const {
    colors,
    spacing,
    border: { borderStyle },
    transitions
  } = getStyles(theme);

  return (
    <Wrapper onMouseLeave={closeMenu} width={spacing[32]}>
      <StyledSelect
        onClick={toggleIsMenuVisible}
        colors={colors}
        spacing={spacing}
        transition={transitions.fast}
        borderStyle={borderStyle.default}>
        <Typography sizeVariant={3}>{currentOption.label}</Typography>
      </StyledSelect>
      {isMenuVisible && (
        <Options colors={colors} borderStyle={borderStyle.default}>
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
  colors: ReturnType<typeof getStyles>["colors"];
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
  colors: ReturnType<typeof getStyles>["colors"];
  spacing: ReturnType<typeof getStyles>["spacing"];
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
