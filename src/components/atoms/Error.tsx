import * as React from "react";
import { Typography } from "./Typography";

interface ErrorProps {
  children: string | null;
}

export const Error: React.SFC<ErrorProps> = ({
  children
}: {
  children: string;
}) => (
  <Typography colorVariant="error" sizeVariant={1}>
    {children}
  </Typography>
);
