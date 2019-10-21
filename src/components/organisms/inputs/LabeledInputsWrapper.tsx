import * as React from "react";
import { Typography } from "~/components/atoms/typography";

export const LabeledInputsWrapper: React.FC<{
  renderInputs: () => React.ReactNode;
  text?: React.ReactNode;
}> = ({ renderInputs, text = "" }) => {
  return (
    <div>
      <Typography>{text}</Typography>
      <div style={{ display: "grid", gridAutoFlow: "row", gridRowGap: "10px" }}>
        {renderInputs()}
      </div>
    </div>
  );
};
