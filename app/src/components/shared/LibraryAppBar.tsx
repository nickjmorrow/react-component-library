import * as React from "react";
import { PopulatedAppBar } from "@nickjmorrow/react-component-library";
import { withRouter, RouteComponentProps } from "react-router";
import { navInfos } from "../../../../old-example/src/componentRoutes";

export const AppBarInternal: React.FC<RouteComponentProps> = () => {
  return (
    <PopulatedAppBar
      navInfos={navInfos}
      styleVariant={2}
      appName={"Component Library"}
    />
  );
};

export const LibraryAppBar = withRouter(AppBarInternal);
