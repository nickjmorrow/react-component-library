import * as React from "react";
import { Typography } from "./typography/Typography";

interface ErrorProps {
  children: string | null;
}

export const Error: React.SFC<ErrorProps> = ({
  children
}: {
  children: string;
}) => (
  <Typography colorVariant="core" sizeVariant={1}>
    {children}
  </Typography>
);
