import * as React from "react";
import { PopulatedAppBar } from "react-component-library";
import { RouterProps, withRouter } from "react-router";

export const AppBarInternal: React.FC<RouterProps> = () => {
  return (
    <PopulatedAppBar styleVariant={"secondary"} appName={"Component Library"} />
  );
};

export const LibraryAppBar = withRouter(AppBarInternal);
