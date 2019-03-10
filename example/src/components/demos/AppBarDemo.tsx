import * as React from "react";
import {
  AppBar,
  PopulatedAppBar,
  Typography,
  StyleConstant,
  ThemeContext
} from "react-component-library";
import styled from "styled-components";
import { Header } from "../shared";

export const AppBarDemo: React.FC = () => {
  const { spacing } = React.useContext(ThemeContext);
  return (
    <Wrapper spacing={spacing}>
      <SectionWrapper spacing={spacing}>
        <Header>Populated AppBar</Header>
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
        <Header>Primary</Header>
        <AppBar styleVariant={"primary"}>
          <Typography
            sizeVariant={5}
            weightVariant={2}
            colorVariant={"primaryLight"}>
            My AppBar
          </Typography>
        </AppBar>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Header>Secondary</Header>
        <AppBar styleVariant={"secondary"}>
          <Typography
            sizeVariant={5}
            weightVariant={2}
            colorVariant={"primaryDark"}>
            My AppBar
          </Typography>
        </AppBar>
      </SectionWrapper>
      <SectionWrapper spacing={spacing}>
        <Header>Tertiary</Header>
        <AppBar styleVariant={"tertiary"}>
          <Typography
            sizeVariant={5}
            weightVariant={2}
            colorVariant={"primaryDark"}>
            My AppBar
          </Typography>
        </AppBar>
      </SectionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  width: 100%;
  max-width: ${p => p.spacing.ss128};
`;

const SectionWrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  margin-bottom: ${p => p.spacing.ss8};
`;
