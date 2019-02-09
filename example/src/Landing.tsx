import { itemLevel, SideNav, NavItemProps } from "njm-react-component-library";
import * as React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import { Buttons } from "./components/demos/Buttons";
import { SelectDemo } from "./components/demos/SelectDemo";

const atomComponents = {
  folderLabel: "Atoms",
  components: [
    {
      component: Buttons,
      label: "Buttons",
      route: "/buttons",
      itemLevel: 1
    },
    {
      component: SelectDemo,
      label: "Select",
      route: "/select",
      itemLevel: 1
    }
  ]
};

const components = [atomComponents];

const routes = components.reduce(
  (prev, curr) => {
    prev.push(
      ...curr.components.map((c, i) => (
        <Route
          key={`${c.route}-${i}`}
          path={c.route}
          component={c.component}
          exact={true}
        />
      ))
    );
    return prev;
  },
  [] as React.ReactNode[]
);

const navInfos = components.reduce(
  (prev, curr) => {
    prev.push({
      label: curr.folderLabel,
      itemLevel: 1 as itemLevel
    });
    prev.push(
      ...curr.components.map(c => ({
        route: c.route,
        label: c.label,
        itemLevel: 2 as itemLevel
      }))
    );
    return prev;
  },
  [] as NavItemProps[]
);

export const Landing: React.SFC<{}> = () => {
  return (
    <GridWrapper>
      <SideNav navInfos={navInfos} />
      <RoutesWrapper>{routes}</RoutesWrapper>
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const RoutesWrapper = styled.div`
  margin: 24px 0px 24px 24px;
`;

// TODO: why are all components being rendered
// and not just those matched to the current route?
