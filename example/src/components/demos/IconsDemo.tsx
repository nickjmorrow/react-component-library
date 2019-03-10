import * as React from "react";
import {
  GithubIcon,
  GoogleIcon,
  LoadingIcon,
  TrashIcon,
  EyeIcon,
  CloseIcon,
  UploadIcon,
  ThemeContext,
  StyleConstant,
  Paper
} from "react-component-library";
import styled from "styled-components";

export const IconsDemo: React.SFC = () => {
  const { spacing, colors } = React.useContext(ThemeContext);
  return (
    <Wrapper spacing={spacing}>
      <Paper>
        <IconSizes spacing={spacing}>
          <CloseIcon sizeVariant={4} />
          <EyeIcon sizeVariant={4} />
          <GithubIcon sizeVariant={4} />
          <GoogleIcon sizeVariant={4} />
          <LoadingIcon sizeVariant={4} />
          <TrashIcon sizeVariant={4} />
          <UploadIcon sizeVariant={4} />
        </IconSizes>
      </Paper>
      <Paper>
        <IconSizes spacing={spacing}>
          <GithubIcon sizeVariant={1} />
          <GithubIcon sizeVariant={2} />
          <GithubIcon sizeVariant={3} />
          <GithubIcon sizeVariant={4} />
        </IconSizes>
      </Paper>
      <Paper color={colors.neutral.lighter}>
        <IconSizes spacing={spacing}>
          <GithubIcon sizeVariant={4} colorVariant={"primaryDark"} />
          <GithubIcon sizeVariant={4} colorVariant={"secondaryDark"} />
        </IconSizes>
      </Paper>
      <Paper color={colors.neutral.darker}>
        <IconSizes spacing={spacing}>
          <GithubIcon sizeVariant={4} colorVariant={"secondaryLight"} />
          <GithubIcon sizeVariant={4} colorVariant={"primaryLight"} />
        </IconSizes>
      </Paper>
    </Wrapper>
  );
};

const Wrapper = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: ${p => p.spacing.ss64};
`;

const IconSizes = styled("div")<{ spacing: StyleConstant<"spacing"> }>`
  padding: 16px;
  min-width: ${p => p.spacing.ss24};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
