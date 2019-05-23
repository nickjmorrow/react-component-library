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
  onClick: handleClick,
  style
}) => {
  return (
    <IconButtonContainer
      onClick={handleClick}
      styleVariant={styleVariant}
      colorVariant={colorVariant}
      isDisabled={isDisabled}
      showBoxShadow={showBoxShadow}
      style={style}>
      <CloseIcon colorVariant={"inherit"} style={{ display: "block" }} />
    </IconButtonContainer>
  );
};
