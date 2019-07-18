import * as React from "react";
import { CloseIcon } from "../CloseIcon";
import { IconProps } from "../types";
import { IconButtonContainer } from "./IconButtonContainer";
import { IconButtonProps } from "./types";

export const CloseIconButton: React.FC<IconProps & IconButtonProps> = ({
  styleVariant = 1,
  colorVariant = "core",
  isDisabled = false,
  showBoxShadow = true,
  sizeVariant,
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
	  sizeVariant={sizeVariant}
      style={style}>
      <CloseIcon sizeVariant={sizeVariant} colorVariant={"inherit"} style={{ display: "block" }} />
    </IconButtonContainer>
  );
};
