import RcSlider from "rc-slider";
import "rc-slider/assets/index.css";
import * as React from "react";
import styled from "styled-components";
import { Typography } from "~/components/atoms/Typography";
import { getStyles, ThemeContext } from "~/styleConstants";
import { StyleConstant } from "~/typeUtilities";

interface IProps {
  value?: number;
  min: number;
  max: number;
  spacingVariant?: keyof StyleConstant<"spacing">;
  onChange(value: number): void;
}

export const Slider: React.SFC<IProps> = ({
  value,
  min,
  max,
  spacingVariant = 64,
  onChange: handleChange
}) => {
  const [isClicking, setIsClicking] = React.useState(false);
  const { theme } = React.useContext(ThemeContext);
  const {
    spacing,
    colors,
    border: { borderStyle },
    transitions
  } = getStyles(theme);

  const handleStyle = {
    border: borderStyle[1],
    borderColor: colors.core.dark,
    boxShadow: isClicking ? `0 0 5px ${colors.core.main}` : "none",
    backgroundColor: colors.core.lightest,
    transition: `box-shadow ${transitions.medium}`
  };

  return (
    <Wrapper spacing={spacing} spacingVariant={spacingVariant}>
      <RcSlider
        min={min}
        max={max}
        value={value || min}
        onChange={handleChange}
        handleStyle={handleStyle}
        railStyle={{
          backgroundColor: colors.neutral.main
        }}
        trackStyle={{ backgroundColor: colors.core.main }}
        onBeforeChange={() => setIsClicking(false)}
        onAfterChange={() => setIsClicking(true)}
      />
      <ValueWrapper>
        <Typography sizeVariant={2}>{value}</Typography>
      </ValueWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{
  spacing: StyleConstant<"spacing">;
  spacingVariant: keyof StyleConstant<"spacing">;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${p => p.spacing[p.spacingVariant]};
`;

const ValueWrapper = styled.div`
  margin-left: 12px;
`;
