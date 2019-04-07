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
    },
    {
      component: LabeledInputDemo,
      label: "Labeled Input",
      route: "/labeled-input"
    },
    {
      component: LogoutModalDemo,
      label: "Logout Modal",
      route: "/logout-modal"
    }
  ]
};

const modalComponents = {
  label: "Modals",
  navLinks: [
    {
      component: AuthModalDemo,
      label: "Auth Modal",
      route: "/auth-modal"
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

const miscComponents = {
  label: "Misc",
  navLinks: [
    {
      component: ExpansionPanelDemo,
      label: "Expansion Panel",
      route: "/expansion-panel"
    },
    {
      component: AppBarDemo,
      label: "App Bar",
      route: "/app-bar"
    }
  ]
};

const componentFolders = [
  themeConfiguration,
  atomComponents,
  modalComponents,
  miscComponents
];

const routes = componentFolders.reduce(
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

export const Main: React.SFC<{}> = () => {
  return (
    <Wrapper>
      <SideNav navInfos={componentFolders} />
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
