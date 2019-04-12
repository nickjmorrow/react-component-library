import * as React from "react";
import { DisplayPaper } from "../../DisplayPaper";
import {
  Typography,
  GetComponentProps,
  ThemeContext,
  Link
} from "react-component-library";
import styled from "styled-components";
import { DescriptionContainer } from "src/components/shared";

type TypographyProp = GetComponentProps<typeof Typography>;

export const TypographyDemo: React.FC = () => {
  const sizeVariants: Array<TypographyProp["sizeVariant"]> = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ];
  const colorVariants: Array<TypographyProp["colorVariant"]> = [
    "core",
    "accent",
    "success",
    "warning",
    "danger"
  ];

  const darkColorVariants: Array<TypographyProp["colorVariant"]> = [
    "primaryDark",
    "secondaryDark"
  ];

  const lightColorVariants: Array<TypographyProp["colorVariant"]> = [
    "primaryLight",
    "secondaryLight"
  ];
  const {
    colors,
    spacing,
    typography: { fontWeights }
  } = React.useContext(ThemeContext);

  return (
    <>
      <div>
        <Typography styleVariant={1}>Typography</Typography>
      </div>
      <DescriptionContainer>
        <Typography>
          The Typography component is used in all components that render text
          onto the page, ensuring consistency. Inputs like sizing, colors, and
          font weights can be configured up front and then reused throughout an
          application through variant props.
        </Typography>
      </DescriptionContainer>
      <Typography styleVariant={2}>Size Variants</Typography>
      <DisplayPaper
        customStyle={{
          flexDirection: "column",
          alignItems: "flex-start",
          width: "400px"
        }}>
        {sizeVariants.map((sv, i) => (
          <Wrapper key={i}>
            <Typography>{sv}</Typography>
            <Typography sizeVariant={sv as TypographyProp["sizeVariant"]}>
              Testing
            </Typography>
          </Wrapper>
        ))}
      </DisplayPaper>
      <Typography styleVariant={2}>Color Variants</Typography>
      <DisplayPaper
        customStyle={{
          flexDirection: "column",
          alignItems: "flex-start",
          height: "200px"
        }}>
        {colorVariants.map(renderColorVariant)}
      </DisplayPaper>
      <Typography styleVariant={2}>Dark Color Variants</Typography>
      <DisplayPaper
        customStyle={{
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100px"
        }}>
        {darkColorVariants.map(renderColorVariant)}
      </DisplayPaper>
      <Typography styleVariant={2}>Light Color Variants</Typography>
      <DisplayPaper
        customStyle={{
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100px",
          backgroundColor: colors.neutral.cs6
        }}>
        {lightColorVariants.map(renderColorVariant)}
      </DisplayPaper>
      <div>
        <Typography styleVariant={2}>Weight Variants</Typography>
      </div>
      <DescriptionContainer>
        <Typography>
          The rendered font weight depends on the weights of the font that have
          been imported. Please see{" "}
          <Link
            route={
              "https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Fallback_weights"
            }>
            fallback weights
          </Link>{" "}
          for more information about fallback weights.
        </Typography>
      </DescriptionContainer>
      <DisplayPaper customStyle={{ display: "grid", gridAutoFlow: "row" }}>
        {Object.keys(fontWeights).map(key => {
          const weightVariant = parseInt(
            key.replace(/^\D+/g, ""),
            10
          ) as GetComponentProps<typeof Typography>["weightVariant"];
          return (
            <div
              key={weightVariant}
              style={{
                display: "grid",
                gridColumnGap: spacing.ss8,
                gridAutoFlow: "column",
                justifyContent: "space-between",
                alignItems: "baseline"
              }}>
              <Typography>{weightVariant}</Typography>
              <Typography sizeVariant={5} weightVariant={weightVariant}>
                Testing
              </Typography>
            </div>
          );
        })}
      </DisplayPaper>
      <Typography styleVariant={2}>Style Variants</Typography>
      <DisplayPaper />
    </>
  );
};

const renderColorVariant = (
  colorVariant: string & TypographyProp["colorVariant"],
  index: number
) => {
  const cvs = colorVariant as string;
  return (
    <Typography
      colorVariant={colorVariant}
      sizeVariant={4}
      weightVariant={4}
      key={index}>
      {cvs[0].toLocaleUpperCase() + cvs.slice(1, cvs.length)} Color
    </Typography>
  );
};

const Wrapper = styled.div`
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
