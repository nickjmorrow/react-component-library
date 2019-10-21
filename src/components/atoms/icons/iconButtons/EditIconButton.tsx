import * as React from "react";
import { EditIcon } from "../EditIcon";
import { IconProps } from "../types";
import { IconButtonContainer } from "./IconButtonContainer";
import { IconButtonProps } from "./types";

export const EditIconButton: React.FC<IconProps & IconButtonProps> = ({
  styleVariant = 1,
  colorVariant = "core",
  isDisabled = false,
  showBoxShadow = true,
  onClick: handleClick,
  ...props
}) => {
  return (
    <IconButtonContainer
      styleVariant={styleVariant}
      colorVariant={colorVariant}
      isDisabled={isDisabled}
      onClick={handleClick}
      showBoxShadow={showBoxShadow}>
      <EditIcon
        colorVariant={"inherit"}
        {...props}
        style={{ display: "block" }}
      />
    </IconButtonContainer>
  );
};
