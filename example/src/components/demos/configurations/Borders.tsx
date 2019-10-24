import * as React from "react";
import {
  Slider,
  ThemeContext,
  ThemeInputsContext,
  Typography
} from "@nickjmorrow/react-component-library";
import { Block } from "../../../components/shared/Block";

export const Borders: React.FC = () => {
  const { colors } = React.useContext(ThemeContext);
  const {
    themeInputs: { border },
    updateThemeInputs
  } = React.useContext(ThemeInputsContext);
  return (
    <>
      <div>
        <Typography styleVariant={"h1"}>Borders</Typography>
      </div>
      <Typography styleVariant={"h2"}>Border Radius</Typography>
      <Block color={colors.core.cs5} />
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
