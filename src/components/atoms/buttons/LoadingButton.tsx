import * as React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { getColor } from "~/components/atoms/typography";
import { ThemeContext } from "~/styleConstants";
import { GetComponentProps } from "~/typeUtilities";
import { Button } from "./Button";
import { FadeIn } from "~/components/animations";

interface OwnProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export const LoadingButton: React.SFC<
  OwnProps & GetComponentProps<typeof Button>
> = ({ isLoading, children, textColorVariant, ...buttonProps }) => {
  const { colors, transitions } = React.useContext(ThemeContext);
  return (
    <Button {...buttonProps} textColorVariant={textColorVariant}>
      {isLoading ? (
        <FadeIn duration={transitions.slow}>
          <PulseLoader
            color={getColor(colors, textColorVariant)}
            size={7}
            sizeUnit={"px"}
          />
        </FadeIn>
      ) : (
        children
      )}
    </Button>
  );
};
