import * as React from "react";
import {
  IOption,
  Select,
  Paper,
  ThemeContext
} from "njm-react-component-library";
import { useState } from "react";
import styled from "styled-components";

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
    display: "flex",
    flexDirection: "row" as "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: spacing.ss128,
    padding: `${spacing.ss8} ${spacing.ss3}`
  };

  return (
    <>
      <Paper style={paperStyles}>
        <SelectWrapper>
          <Select
            options={options}
            currentOption={currentOption}
            onChange={setOption}
          />
        </SelectWrapper>
        <SelectWrapper>
          <Select
            helperText={"Some helper text"}
            options={options}
            currentOption={currentOption}
            onChange={setOption}
          />
        </SelectWrapper>
        <SelectWrapper style={{ marginTop: "-36px" }}>
          <Select
            label={"someLabel"}
            helperText={"Some helper text"}
            options={options}
            currentOption={currentOption}
            onChange={setOption}
          />
        </SelectWrapper>
      </Paper>
      <Paper style={paperStyles}>
        <SelectWrapper>
          <Select
            options={options}
            currentOption={currentOption}
            onChange={setOption}
            error={"Some error text"}
          />
        </SelectWrapper>
        <SelectWrapper>
          <Select
            helperText={"Some helper text"}
            options={options}
            currentOption={currentOption}
            onChange={setOption}
          />
        </SelectWrapper>
        <SelectWrapper style={{ marginTop: "-36px" }}>
          <Select
            label={"someLabel"}
            helperText={"Some helper text"}
            options={options}
            currentOption={currentOption}
            onChange={setOption}
          />
        </SelectWrapper>
      </Paper>
    </>
  );
};

const SelectWrapper = styled.div``;
