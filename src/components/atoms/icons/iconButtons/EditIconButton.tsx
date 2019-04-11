import * as React from "react";
import { EditIcon } from "../EditIcon";
import { IconProps } from "../types";
import { IconButtonContainer } from "./IconButtonContainer";
import { IconButtonProps } from "./types";

export const EditIconButton: React.FC<IconProps & IconButtonProps> = ({
  styleVariant = "primary",
  colorVariant = "core",
  isDisabled = false,
  showBoxShadow = true,
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
