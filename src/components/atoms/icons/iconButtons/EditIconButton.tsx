import * as React from "react";
import { EditIcon } from "../EditIcon";
import { IconProps } from "../types";
import { StyleVariant } from "../../types";
import { IconButtonContainer } from "./IconButtonContainer";

interface Props {
  styleVariant: StyleVariant;
  isDisabled?: boolean;
}

export const EditIconButton: React.FC<IconProps & Props> = ({
  styleVariant,
  colorVariant = "core",
  isDisabled,
  ...props
}) => {
  return (
    <IconButtonContainer
      styleVariant={styleVariant}
      colorVariant={colorVariant}
      isDisabled={isDisabled}>
      <EditIcon
        colorVariant={"inherit"}
        {...props}
        style={{ display: "block" }}
      />
    </IconButtonContainer>
  );
};
