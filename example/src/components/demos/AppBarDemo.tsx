import * as React from "react";
import {
  AppBar,
  Button,
  ColorVariant,
  PopulatedAppBar,
  StyleConstant,
  Typography,
  useThemeContext
} from "@nickjmorrow/react-component-library";
import styled from "styled-components";

const sampleMenuOptions = [
  { label: "Bergundy", route: "/bergundy" },
  {
    label: "Maroon",
    route: "/app-bar"
  },
  { label: "Dark Red", route: "/dark-red" }
];

export const AppBarDemo: React.FC = () => {
  const { spacing } = useThemeContext();
  const rightComponents = (
    <>
      <Button
        useMargin={false}
        showBoxShadow={false}
        styleVariant={3}
        textColorVariant={"secondaryDark"}>
        Sign In
      </Button>
      <Button
        useMargin={false}
        showBoxShadow={false}
        styleVariant={3}
        textColorVariant={"secondaryDark"}>
        Log In
      </Button>
    </>
  );

//   const leftComponents = (
// 	  <Typography colorVariant={'primaryLight'}>About</Typography>
//   )

  return (
    <Wrapper spacing={spacing}>
      <Typography styleVariant={"h1"}>App Bar</Typography>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={"h2"}>Populated AppBar</Typography>
        <div style={{ display: "grid", gridRowGap: "48px" }}>
          <PopulatedAppBar
            appName={"Primary Populated"}
            navInfos={sampleMenuOptions}
          />
          <PopulatedAppBar
            styleVariant={2}
            appName={"Secondary Populated"}
            navInfos={sampleMenuOptions}
            menuLength={"short"}
          />
          <PopulatedAppBar
            styleVariant={3}
            appName={"Tertiary Populated"}
            navInfos={sampleMenuOptions}
          />
        </div>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={"h2"}>Primary</Typography>
        <AppBar styleVariant={1}>
          <AppNameTypography colorVariant={"primaryLight"}>
            My AppBar
          </AppNameTypography>
        </AppBar>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={"h2"}>Secondary</Typography>
        <AppBar styleVariant={2}>
          <AppNameTypography colorVariant={"primaryDark"}>
            My AppBar
          </AppNameTypography>
        </AppBar>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={"h2"}>Tertiary</Typography>
        <AppBar styleVariant={3}>
          <AppNameTypography colorVariant={"primaryDark"}>
            My AppBar
          </AppNameTypography>
        </AppBar>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={"h2"}>With Components</Typography>
        <div style={{ display: "grid", gridRowGap: "20px" }}>
          <PopulatedAppBar
            appName={"Lorem"}
            styleVariant={3}
            rightComponents={rightComponents}
			leftComponents={rightComponents}
            navInfos={sampleMenuOptions}>
            <AppNameTypography colorVariant={"primaryDark"}>
              My AppBar
            </AppNameTypography>
          </PopulatedAppBar>
        </div>
      </SectionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  width: 100%;
  max-width: ${p => p.spacing.ss192};
  margin-bottom: ${p => p.spacing.ss16};
`;

const SectionWrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin-bottom: ${p => p.spacing.ss8};
`;

const AppNameTypography: React.FC<{ colorVariant: ColorVariant }> = ({
  colorVariant
}) => (
  <Typography sizeVariant={6} weightVariant={5} colorVariant={colorVariant}>
    My AppBar
  </Typography>
);
