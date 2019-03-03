import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import styled from "styled-components";
import { Link, Typography } from "../atoms";
import { ThemeContext } from "../../styleConstants";
import { StyleConstant } from "../../typeUtilities";

const SideNavInternal: React.SFC<SideNavProps & RouteComponentProps> = ({
  navInfos,
  location
}) => {
  const { pathname } = location;
  const { colors, transitions, spacing, boxShadow } = React.useContext(
    ThemeContext
  );
  return (
    <Wrapper boxShadow={boxShadow}>
      <NavItems spacing={spacing}>
        {navInfos.map((ni, i) => {
          const content = (
            <ContentWrapper itemLevel={ni.itemLevel}>
              <Typography
                colorVariant={pathname === ni.route ? "core" : "primaryDark"}>
                {ni.label}
              </Typography>
            </ContentWrapper>
          );

          return (
            <NavItemWrapper
              key={i}
              color={colors.neutral.lightest}
              transition={transitions.fast}>
              {ni.route ? (
                <Link
                  route={ni.route}
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: "100%"
                  }}>
                  {content}
                </Link>
              ) : (
                content
              )}
            </NavItemWrapper>
          );
        })}
      </NavItems>
    </Wrapper>
  );
};

export const SideNav = withRouter(SideNavInternal);

// css
const Wrapper = styled("div")<{ boxShadow: StyleConstant<"boxShadow"> }>`
  grid-area: nav;
  display: inline-flex;
  flex-direction: column;
  min-width: 15rem;
  width: auto;
  height: max-content;
  box-shadow: ${p => p.boxShadow.bs1};
`;

const ContentWrapper = styled("div")<DisplayProps>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: ${p => getMargin(p.itemLevel)};
`;

const NavItemWrapper = styled("div")<{ color: string; transition: string }>`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.color};
    transition: ${p => p.transition};
  }
`;

const NavItems = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin-top: ${p => p.spacing.ss2};
`;

const getMargin = (level: itemLevel) => {
  switch (level) {
    case 0:
      return "1em";
    case 1:
      return "2em";
    case 2:
      return "3em";
    case 3:
      return "4em";
    default:
      throw new Error(`invalid level: ${level}`);
  }
};

// types
export type NavItemProps = { label: string; route?: string } & DisplayProps;
interface SideNavProps {
  navInfos: NavItemProps[];
  style?: React.CSSProperties;
}

type itemLevel = 0 | 1 | 2 | 3;

interface DisplayProps {
  itemLevel: itemLevel;
}
