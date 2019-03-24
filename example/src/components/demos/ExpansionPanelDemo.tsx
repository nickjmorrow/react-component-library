import * as React from "react";
import { ExpansionPanel, Typography } from "react-component-library";

export const ExpansionPanelDemo: React.FC = () => {
  return (
    <>
      <div>
        <Typography styleVariant={1}>Expansion Panel</Typography>
      </div>
      <ExpansionPanel
        visibleContent={"I am visible!"}
        hiddenContent={"I was not visible!"}
      />
    </>
  );
};
