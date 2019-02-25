import * as React from "react";
import { Button } from "./buttons/Button";

export const GoogleButton: React.SFC<IOwnProps> = ({
  onClick: handleClick
}) => {
  return <Button onClick={handleClick}>Sign In With Google</Button>;
};

// types
interface IOwnProps {
  onClick: () => void;
}
