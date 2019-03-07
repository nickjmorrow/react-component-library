import * as React from "react";
import {
  AppBar,
  Typography,
  GithubIcon,
  githubLink,
  InvisibleLink
} from "react-component-library";
import { withRouter, RouterProps } from "react-router";

export const AppBarInternal: React.SFC<RouterProps> = () => {
  return (
    <AppBar styleVariant={"secondary"}>
      <Typography
        sizeVariant={6}
        colorVariant={"primaryDark"}
        weightVariant={3}>
        Component Library
      </Typography>
      <InvisibleLink href={githubLink}>
        <GithubIcon sizeVariant={3} colorVariant={"secondaryDark"} />
      </InvisibleLink>
    </AppBar>
  );
};

export const LibraryAppBar = withRouter(AppBarInternal);
