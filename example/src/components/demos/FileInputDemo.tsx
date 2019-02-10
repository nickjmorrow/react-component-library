import * as React from "react";
import { useState } from "react";
import { FileInput } from "njm-react-component-library";

export const FileInputDemo: React.SFC = () => {
  const setFile = useState(null as FileList | null)[1];
  return <FileInput onChange={setFile} />;
};
