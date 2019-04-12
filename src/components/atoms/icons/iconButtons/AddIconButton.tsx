import * as React from "react";
import { AddIcon } from "../AddIcon";
import { IconProps } from "../types";
import { IconButtonContainer } from "./IconButtonContainer";
import { IconButtonProps } from "./types";

export const AddIconButton: React.FC<IconProps & IconButtonProps> = ({
  styleVariant = "primary",
  colorVariant = "core",
  isDisabled = false,
  showBoxShadow = true,
  onClick: handleClick,
  ...props
}) => {
  return (
    <IconButtonContainer
      styleVariant={styleVariant}
      showBoxShadow={showBoxShadow}
      colorVariant={colorVariant}
      isDisabled={isDisabled}
      onClick={handleClick}>
      <AddIcon
        colorVariant={"inherit"}
        {...props}
        style={{ display: "block" }}
      />
    </IconButtonContainer>
  );
};
