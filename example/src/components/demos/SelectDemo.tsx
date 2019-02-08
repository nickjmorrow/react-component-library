import * as React from "react";
import { IOption, Select } from "njm-react-component-library";
import { useState } from "react";

const options: IOption[] = [
  {
    value: "1",
    label: "one"
  },
  {
    value: "2",
    label: "Two"
  }
];

export const SelectDemo: React.SFC = () => {
  const [option, setOption] = useState(options[0]);

  return (
    <Select options={options} currentOption={option} onChange={setOption} />
  );
};
