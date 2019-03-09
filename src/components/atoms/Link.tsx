import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { getFormattedTextNode } from "./typography";

export const Link: React.SFC<Props> = ({ children, route, style }) => {
  const defaultLinkStyle = {
    textDecoration: "none"
  };
  const customStyle = { ...defaultLinkStyle, style };
  return (
    <RouterLink to={route} style={customStyle}>
      {getFormattedTextNode(children, {
        colorVariant: "core",
        style: { textDecoration: "none" }
      })}
    </RouterLink>
  );
};

export interface Props {
  route: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
