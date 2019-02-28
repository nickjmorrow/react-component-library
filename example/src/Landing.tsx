import { itemLevel, SideNav, NavItemProps } from "njm-react-component-library";
import * as React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import { Buttons } from "./components/demos/Buttons";
import { SelectDemo } from "./components/demos/SelectDemo";
import { FileInputDemo } from "./components/demos/FileInputDemo";
import { AuthModalDemo } from "./components/demos/modals/AuthModalDemo";
import { InputDemo } from "./components/demos/TextInputDemo";
import { Colors } from "./components/demos/configurations/Colors";
import { IconsDemo } from "./components/demos/IconsDemo";
import { SliderDemo } from "./components/demos/SliderDemo";
import { Borders } from "./components/demos/configurations/Borders";
import { LabeledInputDemo } from "./components/demos/LabeledInputDemo";

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
      component: InputDemo,
      label: "Text Input",
      route: "/text-input"
    },
    {
      component: LabeledInputDemo,
      label: "Labeled Input",
      route: "/labeled-input"
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
    }
  ]
};

const components = [atomComponents, modalComponents, themeConfiguration];

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
