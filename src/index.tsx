import * as React from "react";

export const Tester: React.SFC<{ text?: string }> = ({ text }) => (
  <div>{text || "I have no text"}Testing 1i</div>
);

// export * from "./constants";
export * from "./styleConstants";
// export * from "./typeUtilities";
// export * from "./types";
export * from "./components";
