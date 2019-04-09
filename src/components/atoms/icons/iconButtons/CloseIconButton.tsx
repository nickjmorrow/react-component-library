import * as React from "react";
import { CloseIcon } from "../CloseIcon";
import { IconProps } from "../types";
import { StyleVariant } from "../../types";
import { IconButtonContainer } from "./IconButtonContainer";

interface Props {
  styleVariant: StyleVariant;
  isDisabled?: boolean;
}

export const CloseIconButton: React.FC<IconProps & Props> = ({
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
      <CloseIcon
        colorVariant={"inherit"}
        {...props}
        style={{ display: "block" }}
      />
    </IconButtonContainer>
  );
};
