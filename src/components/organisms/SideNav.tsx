import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import styled from "styled-components";
import { Typography, Link } from "~/components";
import { colors } from "~/styleConstants";

const SideNavInternal: React.SFC<SideNavProps & RouteComponentProps> = ({
  navInfos,
  style
}) => {
  return (
    <Wrapper style={style}>
      {navInfos.map((ni, i) => {
        const typography: any = <Typography>{ni.label}</Typography>;

        const contentWrapper = (
          <ContentWrapper itemLevel={ni.itemLevel}>{typography}</ContentWrapper>
        );
        return (
          <NavItemWrapper key={i}>
            <Link route={ni.route}>{contentWrapper}</Link>
          </NavItemWrapper>
        );
      })}
    </Wrapper>
  );
};

export const SideNav = withRouter(SideNavInternal);

// css
const Wrapper = styled.div`
  grid-area: nav;
  display: inline-flex;
  flex-direction: column;
  min-width: 15rem;
  height: 100%;
  width: auto;
`;

const ContentWrapper = styled("div")<DisplayProps & Partial<HTMLDivElement>>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: ${p => getMargin(p.itemLevel)};
`;

const NavItemWrapper = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    background-color: ${colors.lightGray};
    transition: 0.2s;
  }
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
export type NavItemProps = { label: string; route: string } & DisplayProps;
interface SideNavProps {
  navInfos: NavItemProps[];
  style?: React.CSSProperties;
}

type itemLevel = 0 | 1 | 2 | 3;

interface DisplayProps {
  itemLevel: itemLevel;
}
