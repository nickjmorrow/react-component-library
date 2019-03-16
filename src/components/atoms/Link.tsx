import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography } from "./typography";
import { ColorVariant, StyleVariant } from "./types";
import { GetComponentProps } from "~/typeUtilities";

export const Link: React.SFC<{
  route: string;
  children: React.ReactText;
  style?: React.CSSProperties;
  styleVariant: StyleVariant;
  typographyProps?: GetComponentProps<typeof Typography>;
}> = ({
  children,
  route,
  style,
  styleVariant = "primary",
  typographyProps
}) => {
  const customStyle = { ...defaultLinkStyle, ...style };
  return (
    <RouterLink to={route} style={customStyle}>
      <Typography
        colorVariant={getColorVariant(styleVariant)}
        {...typographyProps}>
        {children}
      </Typography>
    </RouterLink>
  );
};

const defaultLinkStyle = {
  textDecoration: "none",
  display: "flex",
  alignItems: "center"
};

const getColorVariant = (styleVariant: StyleVariant): ColorVariant => {
  switch (styleVariant) {
    case "primary":
      return "core";
    case "secondary":
    case "tertiary":
      return "primaryDark";
  }
};
