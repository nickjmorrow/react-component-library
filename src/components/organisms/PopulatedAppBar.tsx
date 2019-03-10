import * as React from "react";
import {
  AppBar,
  Typography,
  GithubIcon,
  StyleVariant,
  ColorVariant
} from "../atoms";
import { githubLink } from "~/constants";

export const PopulatedAppBar: React.SFC<{
  appName: React.ReactNode;
  styleVariant?: StyleVariant;
}> = ({ appName, styleVariant = "primary" }) => (
  <AppBar styleVariant={styleVariant}>
    <Typography
      sizeVariant={5}
      weightVariant={2}
      colorVariant={getColorVariant(styleVariant)}>
      {appName}
    </Typography>
    <a href={githubLink}>
      <GithubIcon
        colorVariant={getIconColorVariant(styleVariant)}
        sizeVariant={3}
      />
    </a>
  </AppBar>
);

const getColorVariant = (styleVariant: StyleVariant): ColorVariant => {
  switch (styleVariant) {
    case "primary":
      return "secondaryLight";
    case "secondary":
    case "tertiary":
      return "primaryDark";
  }
};

const getIconColorVariant = (styleVariant: StyleVariant): ColorVariant => {
  switch (styleVariant) {
    case "primary":
      return "secondaryLight";
    case "secondary":
    case "tertiary":
      return "secondaryDark";
  }
};
