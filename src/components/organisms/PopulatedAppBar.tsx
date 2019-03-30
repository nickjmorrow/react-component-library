import * as React from "react";
import {
  AppBar,
  Typography,
  GithubIcon,
  StyleVariant,
  ColorVariant,
  Link
} from "../atoms";
import { githubLink } from "~/constants";
import { ThemeContext } from "~/styleConstants";

export const PopulatedAppBar: React.SFC<{
  appName: React.ReactNode;
  styleVariant?: StyleVariant;
  rightComponents?: React.ReactNode;
  leftComponents?: React.ReactNode;
}> = ({
  appName,
  styleVariant = "primary",
  leftComponents,
  rightComponents
}) => {
  const { spacing } = React.useContext(ThemeContext);
  return (
    <AppBar styleVariant={styleVariant}>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Link route={"/"} style={{ marginRight: spacing.ss4 }}>
          <Typography
            sizeVariant={6}
            weightVariant={5}
            colorVariant={getColorVariant(styleVariant)}>
            {appName}
          </Typography>
        </Link>
        {leftComponents}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {rightComponents}
        <a href={githubLink} style={{ marginLeft: spacing.ss4 }}>
          <GithubIcon
            colorVariant={getIconColorVariant(styleVariant)}
            sizeVariant={3}
          />
        </a>
      </div>
    </AppBar>
  );
};

const getColorVariant = (styleVariant: StyleVariant): ColorVariant => {
  switch (styleVariant) {
    case "primary":
      return "background";
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
