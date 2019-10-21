import * as React from "react";
import {
  ChevronUpIcon,
  CloseIcon,
  EyeIcon,
  GithubIcon,
  GoogleIcon,
  LoadingIcon,
  StyleConstant,
  ThemeContext,
  TrashIcon,
  UploadIcon,
  Typography,
  AddIconButton,
  CloseIconButton,
  EditIconButton,
  MenuIcon,
  RainIcon,
  WindIcon,
  HumidityIcon,
  CloudIcon,
  SunIcon,
  CSharpIcon,
  MongoDBIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  SQLServerIcon,
  NETCoreIcon,
  ReactJSIcon,
  NodeJSIcon,
  ShareIcon,
  ArrowIcon,
  JenkinsCIIcon,
  LinkedInIcon,
  GitIcon,
  ReduxIcon,
  PostgreSQLIcon,
  StyledComponentsIcon,
  JestIcon,
  SeleniumIcon
} from "@nickjmorrow/react-component-library";
import styled from "styled-components";
import { DisplayPaper } from "../DisplayPaper";

export const IconsDemo: React.SFC = () => {
  const { spacing, colors } = React.useContext(ThemeContext);
  const noOp = () => {
    return;
  };
  return (
    <Wrapper spacing={spacing}>
      <Typography styleVariant={1}>Icons</Typography>
      <Typography styleVariant={2}>All Icons</Typography>
      <DisplayPaper style={{ display: "grid", gridAutoFlow: "row" }}>
        <IconSizes spacing={spacing}>
          <CloseIcon sizeVariant={4} />
          <EyeIcon sizeVariant={4} />
          <GithubIcon sizeVariant={4} />
          <GoogleIcon sizeVariant={4} />
          <LoadingIcon sizeVariant={4} />
          <TrashIcon sizeVariant={4} />
          <UploadIcon sizeVariant={4} />
          <ChevronUpIcon sizeVariant={4} />
          <MenuIcon sizeVariant={4} />
          <ShareIcon sizeVariant={4} />
          <ArrowIcon sizeVariant={4} />
        </IconSizes>
      </DisplayPaper>
      <Typography styleVariant={2}>Weather Icons</Typography>
      <DisplayPaper style={{ display: "grid", gridAutoFlow: "row" }}>
        <IconSizes spacing={spacing}>
          <RainIcon sizeVariant={4} />
          <SunIcon sizeVariant={4} />
          <WindIcon sizeVariant={4} />
          <HumidityIcon sizeVariant={4} />
          <CloudIcon sizeVariant={4} />
        </IconSizes>
      </DisplayPaper>
      <Typography styleVariant={2}>Technology Icons</Typography>
      <DisplayPaper style={{ display: "grid", gridAutoFlow: "row" }}>
        <IconSizes spacing={spacing}>
          <NETCoreIcon sizeVariant={4} />
          <ReactJSIcon sizeVariant={4} />
          <NodeJSIcon sizeVariant={4} />
          <JenkinsCIIcon sizeVariant={4} />
          <LinkedInIcon sizeVariant={4} />
          <GitIcon sizeVariant={4} />
          <ReduxIcon sizeVariant={4} />
		  <StyledComponentsIcon />
		  <JestIcon sizeVariant={4} />
		  <SeleniumIcon sizeVariant={4}/>
        </IconSizes>
      </DisplayPaper>
	  <Typography styleVariant={2}>Language Icons</Typography>
      <DisplayPaper style={{ display: "grid", gridAutoFlow: "row" }}>
        <IconSizes spacing={spacing}>
          <CSharpIcon sizeVariant={4} />
          <TypeScriptIcon sizeVariant={4} />
          <JavaScriptIcon sizeVariant={4} />
        </IconSizes>
      </DisplayPaper>
      <Typography styleVariant={2}>Database Icons</Typography>
      <DisplayPaper style={{ display: "grid", gridAutoFlow: "row" }}>
        <IconSizes spacing={spacing}>
          <MongoDBIcon sizeVariant={4} />
          <SQLServerIcon sizeVariant={4} />
          <PostgreSQLIcon sizeVariant={4} />
        </IconSizes>
      </DisplayPaper>
      <Typography styleVariant={2}>Icon Sizes</Typography>
      <DisplayPaper>
        <IconSizes spacing={spacing}>
          <GithubIcon sizeVariant={1} />
          <GithubIcon sizeVariant={2} />
          <GithubIcon sizeVariant={3} />
          <GithubIcon sizeVariant={4} />
        </IconSizes>
      </DisplayPaper>
      <Typography styleVariant={2}>Dark Colors</Typography>
      <DisplayPaper>
        <IconSizes spacing={spacing}>
          <GithubIcon sizeVariant={4} colorVariant={"primaryDark"} />
          <GithubIcon sizeVariant={4} colorVariant={"secondaryDark"} />
        </IconSizes>
      </DisplayPaper>
      <Typography styleVariant={2}>Light Colors</Typography>
      <DisplayPaper style={{ backgroundColor: colors.neutral.cs7 }}>
        <IconSizes spacing={spacing}>
          <GithubIcon sizeVariant={4} colorVariant={"secondaryLight"} />
          <GithubIcon sizeVariant={4} colorVariant={"primaryLight"} />
        </IconSizes>
      </DisplayPaper>
      <Typography styleVariant={2}>Icon Buttons</Typography>
      <DisplayPaper
        style={{
          display: "grid",
          gridAutoFlow: "row",
          gridRowGap: "16px"
        }}
      >
        <IconSizes spacing={spacing}>
          <AddIconButton
            onClick={noOp}
            styleVariant={1}
            sizeVariant={1}
            colorVariant={"core"}
          />
          <AddIconButton onClick={noOp} styleVariant={2} sizeVariant={4} />
          <AddIconButton onClick={noOp} styleVariant={3} sizeVariant={4} />
          <AddIconButton
            isDisabled={true}
            styleVariant={1}
            sizeVariant={4}
            onClick={noOp}
          />
          <AddIconButton
            isDisabled={true}
            styleVariant={2}
            sizeVariant={4}
            onClick={noOp}
          />
          <AddIconButton
            isDisabled={true}
            styleVariant={3}
            sizeVariant={4}
            onClick={noOp}
          />
        </IconSizes>
        <IconSizes spacing={spacing}>
          <CloseIconButton onClick={noOp} styleVariant={1} sizeVariant={4} />
          <CloseIconButton onClick={noOp} styleVariant={2} sizeVariant={4} />
          <CloseIconButton onClick={noOp} styleVariant={3} sizeVariant={4} />
          <CloseIconButton
            isDisabled={true}
            styleVariant={1}
            sizeVariant={4}
            onClick={noOp}
          />
          <CloseIconButton
            isDisabled={true}
            styleVariant={2}
            sizeVariant={4}
            onClick={noOp}
          />
          <CloseIconButton
            isDisabled={true}
            styleVariant={3}
            sizeVariant={4}
            onClick={noOp}
          />
        </IconSizes>
        <IconSizes spacing={spacing}>
          <EditIconButton onClick={noOp} styleVariant={1} sizeVariant={1} />
          <EditIconButton onClick={noOp} styleVariant={2} sizeVariant={4} />
          <EditIconButton onClick={noOp} styleVariant={3} sizeVariant={4} />
          <EditIconButton
            isDisabled={true}
            styleVariant={1}
            sizeVariant={4}
            onClick={noOp}
          />
          <EditIconButton
            isDisabled={true}
            styleVariant={2}
            sizeVariant={4}
            onClick={noOp}
          />
          <EditIconButton
            isDisabled={true}
            styleVariant={3}
            sizeVariant={4}
            onClick={noOp}
          />
        </IconSizes>
      </DisplayPaper>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IconSizes = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  width: min-content;
  display: grid;
  grid-column-gap: ${p => p.spacing.ss6};
  grid-auto-flow: column;
  align-items: center;
`;
