import * as React from "react";
import { IValue } from "~/types";

interface OwnProps {
  label: IValue;
  value?: number;
  color?: string;
  shouldShowIcon?: boolean;
  onClick(value: number): void;
}

export const LabelWithIcon: React.SFC<OwnProps> = () => {
  return <div>TODO</div>;
};
