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
  EditIconButton
} from "react-component-library";
import styled from "styled-components";
import { DisplayPaper } from "../DisplayPaper";

export const IconsDemo: React.SFC = () => {
  const { spacing, colors } = React.useContext(ThemeContext);
  return (
    <Wrapper spacing={spacing}>
      <Typography styleVariant={1}>Icons</Typography>
      <Typography styleVariant={2}>All Icons</Typography>
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
      <DisplayPaper customStyle={{ backgroundColor: colors.neutral.cs7 }}>
        <IconSizes spacing={spacing}>
          <GithubIcon sizeVariant={4} colorVariant={"secondaryLight"} />
          <GithubIcon sizeVariant={4} colorVariant={"primaryLight"} />
        </IconSizes>
      </DisplayPaper>
      <DisplayPaper
        customStyle={{
          display: "grid",
          gridAutoFlow: "row",
          gridRowGap: "16px"
        }}>
        <IconSizes spacing={spacing}>
          <AddIconButton styleVariant={"primary"} sizeVariant={4} />
          <AddIconButton styleVariant={"secondary"} sizeVariant={4} />
          <AddIconButton styleVariant={"tertiary"} sizeVariant={4} />
          <AddIconButton
            isDisabled={true}
            styleVariant={"primary"}
            sizeVariant={4}
          />
          <AddIconButton
            isDisabled={true}
            styleVariant={"secondary"}
            sizeVariant={4}
          />
          <AddIconButton
            isDisabled={true}
            styleVariant={"tertiary"}
            sizeVariant={4}
          />
        </IconSizes>
        <IconSizes spacing={spacing}>
          <CloseIconButton styleVariant={"primary"} sizeVariant={4} />
          <CloseIconButton styleVariant={"secondary"} sizeVariant={4} />
          <CloseIconButton styleVariant={"tertiary"} sizeVariant={4} />
          <CloseIconButton
            isDisabled={true}
            styleVariant={"primary"}
            sizeVariant={4}
          />
          <CloseIconButton
            isDisabled={true}
            styleVariant={"secondary"}
            sizeVariant={4}
          />
          <CloseIconButton
            isDisabled={true}
            styleVariant={"tertiary"}
            sizeVariant={4}
          />
        </IconSizes>
        <IconSizes spacing={spacing}>
          <EditIconButton styleVariant={"primary"} sizeVariant={4} />
          <EditIconButton styleVariant={"secondary"} sizeVariant={4} />
          <EditIconButton styleVariant={"tertiary"} sizeVariant={4} />
          <EditIconButton
            isDisabled={true}
            styleVariant={"primary"}
            sizeVariant={4}
          />
          <EditIconButton
            isDisabled={true}
            styleVariant={"secondary"}
            sizeVariant={4}
          />
          <EditIconButton
            isDisabled={true}
            styleVariant={"tertiary"}
            sizeVariant={4}
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
