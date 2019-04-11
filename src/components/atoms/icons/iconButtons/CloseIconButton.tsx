import * as React from "react";
import { CloseIcon } from "../CloseIcon";
import { IconProps } from "../types";
import { IconButtonContainer } from "./IconButtonContainer";
import { IconButtonProps } from "./types";

export const CloseIconButton: React.FC<IconProps & IconButtonProps> = ({
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
      <CloseIcon
        colorVariant={"inherit"}
        {...props}
        style={{ display: "block" }}
      />
    </IconButtonContainer>
  );
};
