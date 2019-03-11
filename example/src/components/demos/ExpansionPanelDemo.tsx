import * as React from "react";
import { ExpansionPanel } from "react-component-library";

export const ExpansionPanelDemo: React.FC = () => {
  return (
    <ExpansionPanel
      visibleContent={"I am visible!"}
      hiddenContent={"I was not visible!"}
    />
  );
};
