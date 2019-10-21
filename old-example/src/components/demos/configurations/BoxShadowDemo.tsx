import * as React from "react";
import { Typography, ThemeContext } from "@nickjmorrow/react-component-library";
import { DisplayPaper } from "../../../../../app/src/components/shared/DisplayPaper";
import { Block } from "../../../components/shared";

export const BoxShadowDemo: React.FC = () => {
  const { colors, boxShadow } = React.useContext(ThemeContext);
  return (
    <>
      <Typography styleVariant={1}>{"Box Shadow"}</Typography>
      <DisplayPaper>
        <Block color={colors.accent.cs5} boxShadow={boxShadow.bs1} />
        <Block color={colors.accent.cs5} boxShadow={boxShadow.bs2} />
        <Block color={colors.accent.cs5} boxShadow={boxShadow.bs3} />
        <Block color={colors.accent.cs5} boxShadow={boxShadow.bs4} />
        <Block color={colors.accent.cs5} boxShadow={boxShadow.bs5} />
      </DisplayPaper>
    </>
  );
};
