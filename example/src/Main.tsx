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
  TypographyDemo
} from "./components/demos";

const atomComponents = {
  label: "Atoms",
  navLinks: [
    {
      component: Buttons,
      label: "Buttons",
      route: "/buttons"
    },
    {
      component: Buttons,
      label: "Buttons",
      route: "/buttons"
    },
    {
      component: Buttons,
      label: "Buttons",
      route: "/buttons"
    },
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
  label: "Theme Configurations",
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
  atomComponents,
  modalComponents,
  themeConfiguration,
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

// TODO: why are all components being rendered
// and not just those matched to the current route?
