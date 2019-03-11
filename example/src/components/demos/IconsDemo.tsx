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
  UploadIcon
} from "react-component-library";
import styled from "styled-components";
import { DisplayPaper } from "../DisplayPaper";

export const IconsDemo: React.SFC = () => {
  const { spacing, colors } = React.useContext(ThemeContext);
  return (
    <Wrapper spacing={spacing}>
      <DisplayPaper>
        <IconSizes spacing={spacing}>
          <CloseIcon sizeVariant={4} />
          <EyeIcon sizeVariant={4} />
          <GithubIcon sizeVariant={4} />
          <GoogleIcon sizeVariant={4} />
          <LoadingIcon sizeVariant={4} />
          <TrashIcon sizeVariant={4} />
          <UploadIcon sizeVariant={4} />
          <ChevronUpIcon sizeVariant={4} />
        </IconSizes>
      </DisplayPaper>
      <DisplayPaper>
        <IconSizes spacing={spacing}>
          <GithubIcon sizeVariant={1} />
          <GithubIcon sizeVariant={2} />
          <GithubIcon sizeVariant={3} />
          <GithubIcon sizeVariant={4} />
        </IconSizes>
      </DisplayPaper>
      <DisplayPaper>
        <IconSizes spacing={spacing}>
          <GithubIcon sizeVariant={4} colorVariant={"primaryDark"} />
          <GithubIcon sizeVariant={4} colorVariant={"secondaryDark"} />
        </IconSizes>
      </DisplayPaper>
      <DisplayPaper customStyle={{ backgroundColor: colors.neutral.darker }}>
        <IconSizes spacing={spacing}>
          <GithubIcon sizeVariant={4} colorVariant={"secondaryLight"} />
          <GithubIcon sizeVariant={4} colorVariant={"primaryLight"} />
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
`;
