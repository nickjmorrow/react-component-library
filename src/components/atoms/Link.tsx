import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { GetComponentProps } from "~/typeUtilities";
import { ColorVariant, StyleVariant } from "./types";
import { Typography } from "./typography";

export const Link: React.SFC<{
  route: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  styleVariant?: StyleVariant;
  isInline?: boolean;
  typographyProps?: GetComponentProps<typeof Typography>;
}> = ({
  children,
  route,
  style,
  styleVariant = "primary",
  isInline = false,
  typographyProps
}) => {
  const defaultLinkStyle = {
    textDecoration: "none",
    display: isInline ? "inline" : "flex",
    alignItems: "center"
  };
  const customStyle = { ...defaultLinkStyle, ...style };
  const isExternalLink = route.split("")[0] !== "/";
  const content = (
    <Typography
      colorVariant={getColorVariant(styleVariant)}
      {...typographyProps}>
      {children}
    </Typography>
  );
  return isExternalLink ? (
    <a href={route}>{content}</a>
  ) : (
    <RouterLink to={route} style={customStyle}>
      {content}
    </RouterLink>
  );
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
