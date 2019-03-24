import * as React from "react";
import {
  AppBar,
  Button,
  PopulatedAppBar,
  StyleConstant,
  ThemeContext,
  Typography
} from "react-component-library";
import styled from "styled-components";

export const AppBarDemo: React.FC = () => {
  const { spacing } = React.useContext(ThemeContext);
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
          <PopulatedAppBar appName={"Primary Populated"} />
          <PopulatedAppBar
            styleVariant={"secondary"}
            appName={"Secondary Populated"}
          />
          <PopulatedAppBar
            styleVariant={"tertiary"}
            appName={"Tertiary Populated"}
          />
        </div>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={2}>Primary</Typography>
        <AppBar styleVariant={"primary"}>
          <Typography
            sizeVariant={5}
            weightVariant={5}
            colorVariant={"primaryLight"}>
            My AppBar
          </Typography>
        </AppBar>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={2}>Secondary</Typography>
        <AppBar styleVariant={"secondary"}>
          <Typography
            sizeVariant={5}
            weightVariant={5}
            colorVariant={"primaryDark"}>
            My AppBar
          </Typography>
        </AppBar>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={2}>Tertiary</Typography>
        <AppBar styleVariant={"tertiary"}>
          <Typography
            sizeVariant={5}
            weightVariant={5}
            colorVariant={"primaryDark"}>
            My AppBar
          </Typography>
        </AppBar>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Typography styleVariant={2}>With Components</Typography>
        <PopulatedAppBar
          appName={"With Components"}
          styleVariant={"tertiary"}
          rightComponents={rightComponents}>
          <Typography
            sizeVariant={5}
            weightVariant={5}
            colorVariant={"primaryDark"}>
            My AppBar
          </Typography>
        </PopulatedAppBar>
      </SectionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  width: 100%;
  max-width: ${p => p.spacing.ss192};
`;

const SectionWrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin-bottom: ${p => p.spacing.ss8};
`;
