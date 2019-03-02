import * as React from "react";
import { Transition } from "react-transition-group";
import { StyleConstant } from "~/types";
import { ThemeContext } from "~/styleConstants";

export const Fade: React.SFC<{
  in: boolean;
  transitionVariant?: keyof StyleConstant<"transitions">;
  style?: React.CSSProperties;
  styleKeys?: any[]; //TODO: this should be array of html style css attributes
  mounted?: React.CSSProperties;
  unmounted?: React.CSSProperties;
}> = ({
  children,
  in: inProp,
  style,
  styleKeys = [],
  unmounted: customUnmounted = {},
  mounted: customMounted = {},
  transitionVariant = "fast"
}) => {
  const defaultMounted = { opacity: 1 };
  const defaultUnmounted = { opacity: 0 };
  const mounted = { ...defaultMounted, ...customMounted };
  const unmounted = { ...defaultUnmounted, ...customUnmounted };

  const transitionStyles = {
    entering: unmounted,
    entered: mounted,
    exiting: unmounted,
    exited: unmounted
  };

  const { transitions } = React.useContext(ThemeContext);
  const duration =
    transitions.durations[
      transitionVariant as keyof StyleConstant<"transitions">["durations"]
    ];

  const transitionInfo = transitions[transitionVariant];

  const styleKeysWithOpacity = ["opacity", ...styleKeys];
  const transition = styleKeysWithOpacity
    .map(sk => `${sk} ${transitionInfo}`)
    .join(", ");

  const defaultStyle = {
    transition,
    width: "inherit",
    opacity: 0,
    ...style
  };
  return (
    <Transition
      in={inProp}
      timeout={{ enter: 0, exit: duration }}
      unmountOnExit={true}>
      {state => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
          {children}
        </div>
      )}
    </Transition>
  );
};
