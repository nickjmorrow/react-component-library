import * as React from "react";
import { useState } from "react";
import {
  IOption,
  Select,
  ThemeContext,
  Typography
} from "react-component-library";
import { DisplayPaper } from "../DisplayPaper";

const options: IOption[] = [
  {
    value: "1",
    label: "one"
  },
  {
    value: "2",
    label: "two"
  },
  {
    value: "3",
    label: "three"
  },
  {
    value: "4",
    label: "four"
  }
];

export const SelectDemo: React.SFC = () => {
  const [currentOption, setOption] = useState(options[0]);

  const { spacing } = React.useContext(ThemeContext);

  const paperStyles = {
    marginBottom: spacing.ss12,
    display: "grid",
    gridAutoFlow: "column",
    gridColumnGap: spacing.ss4,
    maxWidth: spacing.ss128,
    padding: `${spacing.ss8} ${spacing.ss3}`
  };

  return (
    <>
      <Typography styleVariant={1}>Select</Typography>
      <DisplayPaper style={paperStyles}>
        <div>
          <Select
            options={options}
            currentOption={currentOption}
            onChange={setOption}
          />
        </div>
        <div>
          <Select
            helperText={"Some helper text"}
            options={options}
            currentOption={currentOption}
            onChange={setOption}
          />
        </div>
        <div style={{ marginTop: "-36px" }}>
          <Select
            label={"someLabel"}
            helperText={"Some helper text"}
            options={options}
            currentOption={currentOption}
            onChange={setOption}
          />
        </div>
      </DisplayPaper>
      <DisplayPaper style={paperStyles}>
        <div>
          <Select
            options={options}
            currentOption={currentOption}
            onChange={setOption}
            error={"Some error text"}
          />
        </div>
        <div>
          <Select
            helperText={"Some helper text"}
            options={options}
            currentOption={currentOption}
            onChange={setOption}
          />
        </div>
        <div style={{ marginTop: "-36px" }}>
          <Select
            label={"someLabel"}
            helperText={"Some helper text"}
            options={options}
            currentOption={currentOption}
            onChange={setOption}
          />
        </div>
      </DisplayPaper>
    </>
  );
};
