import * as React from "react";
import {
  AppBar,
  Typography,
  GithubIcon,
  githubLink,
  InvisibleLink
} from "njm-react-component-library";
import { withRouter, RouterProps } from "react-router";

export const AppBarInternal: React.SFC<RouterProps> = ({ history }) => {
  return (
    <AppBar>
      <Typography
        sizeVariant={6}
        colorVariant="textPrimaryLight"
        weightVariant={2}>
        Component Library
      </Typography>
      <InvisibleLink href={githubLink}>
        <GithubIcon sizeVariant={4} colorVariant={"primaryLight"} />
      </InvisibleLink>
    </AppBar>
  );
};

export const LibraryAppBar = withRouter(AppBarInternal);
