import * as React from "react";
import { AddIcon } from "../AddIcon";
import { IconProps } from "../types";
import { IconButtonContainer } from "./IconButtonContainer";
import { IconButtonProps } from "./types";

export const AddIconButton: React.FC<IconProps & IconButtonProps> = ({
  styleVariant = 1,
  colorVariant = "core",
  isDisabled = false,
  showBoxShadow = true,
  sizeVariant,
  onClick: handleClick,
  ...props
}) => {
  return (
    <IconButtonContainer
      styleVariant={styleVariant}
      showBoxShadow={showBoxShadow}
      colorVariant={colorVariant}
	  isDisabled={isDisabled}
	  sizeVariant={sizeVariant}
      onClick={handleClick}>
      <AddIcon
        colorVariant={"inherit"}
        {...props}
		style={{ display: "block" }}
		sizeVariant={sizeVariant}
      />
    </IconButtonContainer>
  );
};
