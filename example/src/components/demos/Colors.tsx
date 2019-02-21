import * as React from "react";
import {
  ThemeContext,
  getStyles,
  ColorShade,
  Typography,
  StyleConstant,
  Slider,
  defaultPrimaryPaletteDescriptor
} from "njm-react-component-library";
import styled from "styled-components";

export const Colors: React.SFC = () => {
  const { theme, updateTheme } = React.useContext(ThemeContext);
  const {
    colors,
    spacing,
    border: { borderRadius }
  } = getStyles(theme);

  const handleChange = (
    value: number,
    colorInput: keyof typeof defaultPrimaryPaletteDescriptor,
    colorShade: keyof typeof colors
  ) => {
    const updateObj = {
      colors: {
        [colorShade]: {
          [colorInput]: value
        }
      }
    };

    console.log(updateObj);
    updateTheme(updateObj);
  };
  const renderBlocks = (colorShade: ColorShade, colorName: string) => (
    <Blocks spacing={spacing}>
      <Typography sizeVariant={4}>{colorName}</Typography>
      <Wrapper spacing={spacing}>
        <Block
          borderRadius={borderRadius}
          spacing={spacing}
          color={colorShade.lightest}
        />
        <Block
          borderRadius={borderRadius}
          spacing={spacing}
          color={colorShade.lighter}
        />
        <Block
          borderRadius={borderRadius}
          spacing={spacing}
          color={colorShade.light}
        />
        <Block
          borderRadius={borderRadius}
          spacing={spacing}
          color={colorShade.main}
        />
        <Block
          borderRadius={borderRadius}
          spacing={spacing}
          color={colorShade.dark}
        />
        <Block
          borderRadius={borderRadius}
          spacing={spacing}
          color={colorShade.darker}
        />
        <Block
          borderRadius={borderRadius}
          spacing={spacing}
          color={colorShade.darkest}
        />
      </Wrapper>
      <Parameters>
        <Typography>Hue: </Typography>
        <Slider
          min={0}
          max={20}
          onChange={value =>
            handleChange(
              value,
              "hue",
              colorName.toLowerCase() as keyof typeof colors
            )
          }
        />
        <Typography>Hue Decrement: </Typography>
        <Typography>Middle Lightness: </Typography>
        <Typography>Lightness Increment: </Typography>
        <Typography>Lightness Decrement: </Typography>
        <Typography>Saturation: </Typography>
      </Parameters>
    </Blocks>
  );
  const { core, accent, neutral, danger, warning, success } = colors;

  return (
    <BlocksWrapper>
      {renderBlocks(core, "Core")}
      {renderBlocks(accent, "Accent")}
      {renderBlocks(neutral, "Neutral")}
      {renderBlocks(danger, "Danger")}
      {renderBlocks(warning, "Warning")}
      {renderBlocks(success, "Success")}
    </BlocksWrapper>
  );
};

const BlocksWrapper = styled.div``;
const Wrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  display: flex;
  flex-direction: row;
  margin-bottom: ${p => p.spacing[4]};
`;

const Block = styled("div")<{
  color: string;
  spacing: StyleConstant<"spacing">;
  borderRadius: StyleConstant<"border">["borderRadius"];
}>`
  width: ${p => p.spacing[16]};
  height: ${p => p.spacing[16]};
  margin: ${p => `${p.spacing[2]}px ${p.spacing[4]}px ${p.spacing[2]}px 0`};
  margin: 6px 12px 6px 0;
  border-radius: ${p => p.borderRadius.default};
  background-color: ${props => props.color};
`;

const Parameters = styled.div`
  display: flex;
  flex-direction: column;
`;

const Blocks = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin-bottom: ${p => p.spacing[16]};
`;
