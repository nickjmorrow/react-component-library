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
  const handleClick = () => history.push(githubLink);
  return (
    <AppBar>
      <Typography variant="h2" color="light">
        Component Library
      </Typography>
      <InvisibleLink href={githubLink}>
        <GithubIcon
          style={{ width: "32px", height: "32px", cursor: "pointer" }}
          onClick={handleClick}
        />
      </InvisibleLink>
    </AppBar>
  );
};

export const LibraryAppBar = withRouter(AppBarInternal);
