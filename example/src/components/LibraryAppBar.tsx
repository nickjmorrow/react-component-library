import * as React from "react";
import { PopulatedAppBar } from "@nickjmorrow/react-component-library";
import { withRouter, RouteComponentProps } from "react-router";
import { navInfos } from "../componentRoutes";

export const AppBarInternal: React.FC<RouteComponentProps> = () => {
  return (
    <PopulatedAppBar
      navInfos={navInfos}
      styleVariant={"secondary"}
      appName={"Component Library"}
    />
  );
};

export const LibraryAppBar = withRouter(AppBarInternal);
