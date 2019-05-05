import * as React from "react";
import {
  AppBar,
  Button,
  ColorVariant,
  PopulatedAppBar,
  StyleConstant,
  Typography,
  useThemeContext
} from "react-component-library";
import styled from "styled-components";

const sampleMenuOptions = [
  { label: "Bergundy", route: "/bergundy" },
  {
    label: "Maroon",
    route: "/maroon"
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
        styleVariant={"tertiary"}
        textColorVariant={"secondaryDark"}>
        Sign In
      </Button>
      <Button
        useMargin={false}
        showBoxShadow={false}
        styleVariant={"tertiary"}
        textColorVariant={"secondaryDark"}>
        Log In
      </Button>
    </>
  );

  return (
    <Wrapper spacing={spacing}>
      <Typography styleVariant={1}>App Bar</Typography>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={2}>Populated AppBar</Typography>
        <div style={{ display: "grid", gridRowGap: "20px" }}>
          <PopulatedAppBar
            appName={"Primary Populated"}
            navInfos={sampleMenuOptions}
          />
          <PopulatedAppBar
            styleVariant={"secondary"}
            appName={"Secondary Populated"}
            navInfos={sampleMenuOptions}
            menuLength={"short"}
          />
          <PopulatedAppBar
            styleVariant={"tertiary"}
            appName={"Tertiary Populated"}
            navInfos={sampleMenuOptions}
          />
        </div>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={2}>Primary</Typography>
        <AppBar styleVariant={"primary"}>
          <AppNameTypography colorVariant={"primaryLight"}>
            My AppBar
          </AppNameTypography>
        </AppBar>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={2}>Secondary</Typography>
        <AppBar styleVariant={"secondary"}>
          <AppNameTypography colorVariant={"primaryDark"}>
            My AppBar
          </AppNameTypography>
        </AppBar>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={2}>Tertiary</Typography>
        <AppBar styleVariant={"tertiary"}>
          <AppNameTypography colorVariant={"primaryDark"}>
            My AppBar
          </AppNameTypography>
        </AppBar>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={2}>With Components</Typography>
        <div style={{ display: "grid", gridRowGap: "20px" }}>
          <PopulatedAppBar
            appName={"With Components"}
            styleVariant={"tertiary"}
            rightComponents={rightComponents}
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
