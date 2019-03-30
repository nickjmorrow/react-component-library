import * as React from "react";
import { Block } from "src/components/shared/Block";
import {
  ThemeContext,
  ThemeInputsContext,
  Slider,
  Typography
} from "react-component-library";

export const Borders: React.FC = () => {
  const {
    colors,
    spacing,
    border: { borderRadius }
  } = React.useContext(ThemeContext);
  const {
    themeInputs: { border },
    updateThemeInputs
  } = React.useContext(ThemeInputsContext);
  return (
    <>
      <div>
        <Typography styleVariant={1}>Borders</Typography>
      </div>
      <Typography styleVariant={2}>Border Radius</Typography>
      <Block
        color={colors.core.cs5}
        spacing={spacing}
        borderRadius={borderRadius}
      />
      <Slider
        min={0}
        max={20}
        value={border!.borderRadius!.br1}
        onChange={(value: number) =>
          updateThemeInputs({ border: { borderRadius: { br1: value } } })
        }
      />
    </>
  );
};
