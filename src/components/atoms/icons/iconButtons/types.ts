import { StyleVariant } from "~/components/atoms";

export interface IconButtonProps {
  styleVariant?: StyleVariant;
  showBoxShadow?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}
