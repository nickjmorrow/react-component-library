import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { formattedTextNode } from "./Typography";
import { colors, transitions } from "../../styleConstants";
import styled from "styled-components";
import { LocationDescriptor } from "history";

export interface INonStyledLinkProps {
  route: string;
  children: React.ReactNode;
}

export type ILinkProps = INonStyledLinkProps & IStyledLinkProps;

export const Link: React.SFC<ILinkProps> = ({
  children,
  color,
  hoverColor,
  route,
  style
}) => {
  return (
    <StyledRouterLink
      to={route}
      color={color}
      hoverColor={hoverColor}
      style={style}>
      {formattedTextNode(children, { color: "inherit" })}
    </StyledRouterLink>
  );
};

interface IStyledLinkProps {
  color?: string;
  hoverColor?: string;
  style?: React.CSSProperties;
}

// TODO: this is messy. couldnt use the RouterLinkProps for some reason
interface IExternalLinkProps {
  to?: LocationDescriptor<any>;
}

const StyledRouterLink = styled(RouterLink)<
  IStyledLinkProps & IExternalLinkProps
>`
  color: ${props => props.color || colors.white};
  text-decoration: none;
  &:hover {
    transition: ${transitions.fast};
    color: ${props => props.hoverColor || colors.secondary};
  }
`;
