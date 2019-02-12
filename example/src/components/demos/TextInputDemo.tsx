import * as React from "react";
import { TextInput } from "njm-react-component-library";

export const TextInputDemo: React.SFC = () => {
  const [value, setValue] = React.useState("");
  return <TextInput value={value} onChange={setValue} />;
};
