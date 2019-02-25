import { LocationDescriptor } from "history";
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../styleConstants";
import { formattedTextNode } from "./typography/Typography";
import { StyleConstant } from "~/typeUtilities";

export interface INonStyledLinkProps {
  route: string;
  children: React.ReactNode;
}

export type ILinkProps = INonStyledLinkProps & IStyledLinkProps;

export const Link: React.SFC<ILinkProps> = ({ children, route, style }) => {
  const { colors, transitions } = React.useContext(ThemeContext);
  return (
    <StyledRouterLink
      to={route}
      color={colors.core.main}
      hoverColor={colors.core.light}
      transition={transitions.fast}
      colors={colors}
      style={style}>
      {formattedTextNode(children, { colorVariant: "inherit" })}
    </StyledRouterLink>
  );
};

interface StyleSystemProps {
  colors: StyleConstant<"colors">;
  transition: string;
}

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
  IStyledLinkProps & IExternalLinkProps & StyleSystemProps
>`
  color: ${props => props.color || props.colors.core.main};
  text-decoration: none;
  &:hover {
    transition: ${p => p.transition};
    color: ${props => props.hoverColor || props.colors.core.light};
  }
`;
