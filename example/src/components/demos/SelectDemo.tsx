import * as React from "react";
import { useState } from "react";
import {
  IOption,
  Select,
  ThemeContext,
  Typography,
  Multiselect
} from "@nickjmorrow/react-component-library";
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
  },
  {
    value: "5",
    label: "five"
  }
];

export const SelectDemo: React.SFC = () => {
  const [currentOption, setOption] = useState(options[0]);
  const [currentOptions, setOptions] = useState([options[0]]);

  const { spacing } = React.useContext(ThemeContext);

  const paperStyles = {
    marginBottom: spacing.ss12,
    display: "grid",
    gridAutoFlow: "column",
    gridColumnGap: spacing.ss4,
    maxWidth: spacing.ss128,
    padding: `${spacing.ss8} ${spacing.ss3}`
  };

  const MARGIN_TOP_OFFSET = '-48px';

  return (
    <div style={{ marginBottom: spacing.ss48 }}>
      <Typography styleVariant={"h1"}>Select</Typography>
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
            numVisibleOptions={3.5}
          />
        </div>
        <div style={{ marginTop: MARGIN_TOP_OFFSET }}>
          <Select
            label={"someLabel"}
            helperText={"Some helper text"}
            options={options}
            currentOption={currentOption}
            onChange={setOption}
            numVisibleOptions={3}
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
        <div style={{ marginTop: MARGIN_TOP_OFFSET }}>
          <Select
            label={"someLabel"}
            helperText={"Some helper text"}
            options={options}
            currentOption={currentOption}
            onChange={setOption}
          />
        </div>
      </DisplayPaper>
      <Typography styleVariant={"h2"}>Multiselect</Typography>
      <DisplayPaper style={paperStyles}>
        <div>
          <Multiselect
            options={options}
            currentOptions={currentOptions}
            onChange={setOptions}
            placeholder={"Select cities"}
            numVisibleOptions={3}
          />
        </div>
      </DisplayPaper>
    </div>
  );
};
