import * as React from "react";
import {
  GetComponentProps,
  Typography,
  ArrowIcon
} from "@nickjmorrow/react-component-library";

export const BulletPointTypography: React.FC<
  GetComponentProps<typeof Typography>
> = ({ children }) => {
  return (
    <>
      <ArrowIcon sizeVariant={1} />
      <Typography>{children}</Typography>
    </>
  );
};
