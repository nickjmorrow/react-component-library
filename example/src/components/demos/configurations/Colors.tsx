import * as React from "react";
import {
  ThemeContext,
  ColorShade,
  Typography,
  StyleConstant,
  Slider,
  ThemeInputsContext,
  ArgumentType,
  getMergedThemeInputs,
  ExpansionPanel
} from "react-component-library";
import styled from "styled-components";
import { Block } from "../../shared/Block";
import { Header } from "src/components/shared";

export const Colors: React.SFC = () => {
  const {
    colors,
    spacing,
    border: { borderRadius },
    boxShadow
  } = React.useContext(ThemeContext);

  const { themeInputs, updateThemeInputs } = React.useContext(
    ThemeInputsContext
  );

  const handleChange = (
    value: number,
    colorInput: keyof ReturnType<typeof getMergedThemeInputs>["colors"]["core"],
    colorShade: keyof typeof colors
  ) => {
    const newThemeInput: ArgumentType<typeof updateThemeInputs>[0] = {
      colors: {
        [colorShade]: {
          [colorInput]: value
        }
      }
    };
    updateThemeInputs(newThemeInput);
  };
  const renderBlocks = (colorShade: ColorShade, colorName: string) => (
    <React.Fragment key={colorName}>
      <Header>{colorName}</Header>
      <Blocks spacing={spacing}>
        <ColorsWrapper spacing={spacing}>
          {Object.keys(colorShade).map(shade => (
            <Block
              borderRadius={borderRadius}
              spacing={spacing}
              color={colorShade[shade]}
              boxShadow={boxShadow}
            />
          ))}
        </ColorsWrapper>
        <ExpansionPanel
          visibleContent={"Change inputs"}
          hiddenContent={
            <Parameters>
              <ColorInput spacing={spacing}>
                <Typography>Hue: </Typography>
                <Slider
                  min={0}
                  max={360}
                  value={
                    themeInputs.colors![
                      colorName.toLowerCase() as keyof typeof colors
                    ]!.hue
                  }
                  onChange={value =>
                    handleChange(
                      value,
                      "hue",
                      colorName.toLowerCase() as keyof typeof colors
                    )
                  }
                />
              </ColorInput>
              <ColorInput spacing={spacing}>
                <Typography>Hue Decrement: </Typography>
                <Slider
                  min={0}
                  max={100}
                  value={
                    themeInputs.colors![
                      colorName.toLowerCase() as keyof typeof colors
                    ]!.hueDecrement
                  }
                  onChange={value =>
                    handleChange(
                      value,
                      "hueDecrement",
                      colorName.toLowerCase() as keyof typeof colors
                    )
                  }
                />
              </ColorInput>
              <ColorInput spacing={spacing}>
                <Typography>Middle Lightness: </Typography>
                <Slider
                  min={0}
                  max={100}
                  value={
                    themeInputs.colors![
                      colorName.toLowerCase() as keyof typeof colors
                    ]!.middleLightness
                  }
                  onChange={value =>
                    handleChange(
                      value,
                      "middleLightness",
                      colorName.toLowerCase() as keyof typeof colors
                    )
                  }
                />
              </ColorInput>
              <ColorInput spacing={spacing}>
                <Typography>Lightness Increment: </Typography>
                <Slider
                  min={0}
                  max={100}
                  value={
                    themeInputs.colors![
                      colorName.toLowerCase() as keyof typeof colors
                    ]!.lightnessIncrement
                  }
                  onChange={value =>
                    handleChange(
                      value,
                      "lightnessIncrement",
                      colorName.toLowerCase() as keyof typeof colors
                    )
                  }
                />
              </ColorInput>
              <ColorInput spacing={spacing}>
                <Typography>Lightness Decrement: </Typography>
                <Slider
                  min={0}
                  max={100}
                  value={
                    themeInputs.colors![
                      colorName.toLowerCase() as keyof typeof colors
                    ]!.lightnessDecrement
                  }
                  onChange={value =>
                    handleChange(
                      value,
                      "lightnessDecrement",
                      colorName.toLowerCase() as keyof typeof colors
                    )
                  }
                />
              </ColorInput>
              <ColorInput spacing={spacing}>
                <Typography>Saturation: </Typography>
                <Slider
                  min={0}
                  max={100}
                  value={
                    themeInputs.colors![
                      colorName.toLowerCase() as keyof typeof colors
                    ]!.saturation
                  }
                  onChange={value =>
                    handleChange(
                      value,
                      "saturation",
                      colorName.toLowerCase() as keyof typeof colors
                    )
                  }
                />
              </ColorInput>
            </Parameters>
          }
        />
      </Blocks>
    </React.Fragment>
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
const ColorsWrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Parameters = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColorInput = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin-bottom: ${p => p.spacing.ss3};
`;

const Blocks = styled("div")<{
  spacing: StyleConstant<"spacing">;
}>`
  margin-bottom: ${p => p.spacing.ss12};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;
