import * as React from "react";
import { SideNav } from "react-component-library";
import { Route } from "react-router";
import styled from "styled-components";
import {
  AppBarDemo,
  AuthModalDemo,
  Borders,
  Buttons,
  Colors,
  ExpansionPanelDemo,
  FileInputDemo,
  IconsDemo,
  LabeledInputDemo,
  LogoutModalDemo,
  SelectDemo,
  SliderDemo,
  TextInputDemo,
  TypographyDemo,
  BoxShadowDemo
} from "./components/demos";
import { SpacingDemo } from "./components/demos/configurations/SpacingDemo";
import { GettingStarted } from "./components/GettingStarted";
import { Principles } from "./components/Principles";

const atomComponents = {
  label: "Atoms",
  navLinks: [
    {
      component: Buttons,
      label: "Buttons",
      route: "/buttons"
    },
    {
      component: SelectDemo,
      label: "Select",
      route: "/select"
    },
    {
      component: IconsDemo,
      label: "Icons",
      route: "/icons"
    },
    {
      component: FileInputDemo,
      label: "File Input",
      route: "/file-input"
    },
    {
      component: SliderDemo,
      label: "Slider",
      route: "/slider"
    },
    {
      component: TextInputDemo,
      label: "Text Input",
      route: "/text-input"
    }
  ]
};

const moleculeComponents = {
  label: "Molecules",
  navLinks: [
    {
      component: LabeledInputDemo,
      label: "Labeled Inputs",
      route: "/labeled-inputs"
    },
    {
      component: ExpansionPanelDemo,
      label: "Expansion Panel",
      route: "/expansion-panel"
    }
  ]
};

const organismComponents = {
  label: "Organisms",
  navLinks: [
    {
      component: LogoutModalDemo,
      label: "Logout Modal",
      route: "/logout-modal"
    },
    {
      component: AuthModalDemo,
      label: "Auth Modal",
      route: "/auth-modal"
    },
    {
      component: AppBarDemo,
      label: "App Bar",
      route: "/app-bar"
    }
  ]
};

const themeConfiguration = {
  label: "Style System",
  navLinks: [
    {
      component: Colors,
      label: "Colors",
      route: "/colors"
    },
    {
      component: Borders,
      label: "Borders",
      route: "/borders"
    },
    {
      component: TypographyDemo,
      label: "Typography",
      route: "/typography"
    },
    {
      component: BoxShadowDemo,
      label: "Box Shadow",
      route: "/box-shadow"
    },
    {
      component: SpacingDemo,
      label: "Spacing",
      route: "/spacing"
    }
  ]
};

const componentFolders = [
  themeConfiguration,
  atomComponents,
  moleculeComponents,
  organismComponents
];

const navLinks = [
  {
    label: "Getting Started",
    route: "/getting-started",
    component: GettingStarted
  },
  {
    label: "Principles",
    route: "/principles",
    component: Principles
  }
];

const navLinkRoutes = navLinks.map((nl, i) => (
  <Route
    key={`route-${nl.route}-${i}`}
    path={nl.route}
    component={nl.component}
  />
));

const folderRoutes = componentFolders.reduce(
  (prev, curr) => {
    prev.push(
      ...curr.navLinks.map((c, i) => (
        <Route
          key={`route-${c.route}-${i}`}
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

const routes = [...folderRoutes, ...navLinkRoutes];
const navInfos = [...navLinks, ...componentFolders];

export const Main: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <SideNav navInfos={navInfos} />
      <RoutesWrapper>{routes}</RoutesWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-grow: 1;
  margin-bottom: 36px;
`;

const RoutesWrapper = styled.div`
  margin: 36px;
  width: 100%;
`;
