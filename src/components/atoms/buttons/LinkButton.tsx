import * as React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { GetComponentProps } from "~/typeUtilities";

interface OwnProps {
  isLoading: boolean;
  children: React.ReactNode;
  to: string;
}

export const LinkButton: React.SFC<
  OwnProps & GetComponentProps<typeof Button>
> = ({ to, children, ...buttonProps }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Button {...buttonProps}>{children}</Button>
    </Link>
  );
};
