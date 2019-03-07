import * as React from "react";
import { DisplayPaper } from "../../DisplayPaper";
import {
  Typography,
  GetComponentProps,
  ThemeContext
} from "react-component-library";
import { Header } from "src/components/shared";
import styled from "styled-components";

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
  const { colors } = React.useContext(ThemeContext);

  return (
    <>
      <Header>Size Variants</Header>
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
      <Header>Color Variants</Header>
      <DisplayPaper
        customStyle={{
          flexDirection: "column",
          alignItems: "flex-start",
          height: "200px"
        }}>
        {colorVariants.map(renderColorVariant)}
      </DisplayPaper>
      <Header>Dark Color Variants</Header>
      <DisplayPaper
        customStyle={{
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100px"
        }}>
        {darkColorVariants.map(renderColorVariant)}
      </DisplayPaper>
      <Header>Light Color Variants</Header>
      <DisplayPaper
        customStyle={{
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100px",
          backgroundColor: colors.neutral.dark
        }}>
        {lightColorVariants.map(renderColorVariant)}
      </DisplayPaper>
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
      weightVariant={1}
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
