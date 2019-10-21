import * as React from "react";
import { Button } from "../atoms";

export const VerticalNavMenu: React.SFC<IOwnProps> = ({
  buttonProps: links
}) => {
  return (
    <>
      {links.map(l => (
        <Button
          onClick={l.onClick}
          style={{
            width: "100%",
            margin: "0",
            borderRadius: "0"
          }}>
          {l.label}
        </Button>
      ))}
    </>
  );
};

// types
interface IOwnProps {
  buttonProps: Array<{ onClick: () => void; label: string }>;
}
