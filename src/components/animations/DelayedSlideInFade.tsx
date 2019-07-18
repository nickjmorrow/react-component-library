import * as React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { SlideInFade } from "./SlideInFade";
import { GetComponentProps } from "~/typeUtilities";


export const DelayedSlideInFade: React.FC<
  GetComponentProps<typeof SlideInFade>
> = ({ children, enterTimeout = 500, ...props }) => {
  const [hasAlreadyBeenVisible, setHasAlreadyBeenVisible] = React.useState(
    false
  );

  return (
    <VisibilitySensor partialVisibility={true}>
      {({ isVisible }) => {
        if (isVisible && !hasAlreadyBeenVisible) {
          setHasAlreadyBeenVisible(true);
        }
        return (
          <SlideInFade
            in={isVisible || hasAlreadyBeenVisible}
            enterTimeout={enterTimeout}
			{...props}
          >
            {children}
          </SlideInFade>
        );
      }}
    </VisibilitySensor>
  );
};
