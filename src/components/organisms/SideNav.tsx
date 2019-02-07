import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import styled from "styled-components";
import { NavItem, NavItemProps } from "~/components/molecules";

interface SideNavProps {
  navInfos: NavItemProps[];
}

const SideNavInternal: React.SFC<SideNavProps & RouteComponentProps> = ({
  navInfos
}) => {
  return (
    <Wrapper>
      {navInfos.map((ni, i) => (
        <NavItem key={i} level={ni.level} route={ni.route} text={ni.text} />
      ))}
    </Wrapper>
  );
};

export const SideNav = withRouter(SideNavInternal);

const Wrapper = styled.div`
  grid-area: nav;
  display: inline-flex;
  flex-direction: column;
  min-width: 15rem;
  height: 100%;
  width: auto;
`;
