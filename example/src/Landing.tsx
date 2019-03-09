import { itemLevel, NavItemProps, SideNav } from "react-component-library";
import * as React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import {
  TypographyDemo,
  TextInputDemo,
  Buttons,
  SelectDemo,
  IconsDemo,
  FileInputDemo,
  SliderDemo,
  LabeledInputDemo,
  LogoutModalDemo,
  AuthModalDemo,
  Colors,
  Borders,
  ExpansionPanelDemo
} from "./components/demos";

const atomComponents = {
  folderLabel: "Atoms",
  components: [
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
  folderLabel: "Modals",
  components: [
    {
      component: AuthModalDemo,
      label: "Auth Modal",
      route: "/auth-modal"
    }
  ]
};

const themeConfiguration = {
  folderLabel: "Theme Configurations",
  components: [
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
  folderLabel: "Misc",
  components: [
    {
      component: ExpansionPanelDemo,
      label: "Expansion Panel Demo",
      route: "/expansion-panel-demo"
    }
  ]
};

const components = [
  atomComponents,
  modalComponents,
  themeConfiguration,
  miscComponents
];

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
    <FlexWrapper>
      <SideNav navInfos={navInfos} />
      <RoutesWrapper>{routes}</RoutesWrapper>
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const RoutesWrapper = styled.div`
  margin: 24px 0px 24px 32px;
`;

// TODO: why are all components being rendered
// and not just those matched to the current route?
