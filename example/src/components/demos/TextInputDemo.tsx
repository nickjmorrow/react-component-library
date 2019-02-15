import * as React from "react";
import { TextInput, PasswordInput } from "njm-react-component-library";

export const InputDemo: React.SFC = () => {
  const [value, setValue] = React.useState("");
  return (
    <>
      <TextInput value={value} onChange={setValue} />
      <PasswordInput value={value} onChange={setValue} />
    </>
  );
};
