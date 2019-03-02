import * as React from "react";
import { Transition } from "react-transition-group";
import { StyleConstant } from "~/index";
import { ThemeContext } from "~/styleConstants";

const transitionStyles = {
  entering: { opacity: 0, display: "hidden" },
  entered: { opacity: 1 },
  exiting: { opacity: 0, display: "hidden" },
  exited: { opacity: 0, display: "hidden" }
};

export const Fade: React.SFC<{
  in: boolean;
  transitionVariant?: keyof StyleConstant<"transitions">;
  style?: React.CSSProperties;
}> = ({ children, in: inProp, style, transitionVariant = "fast" }) => {
  const { transitions } = React.useContext(ThemeContext);
  const duration =
    transitions.durations[
      transitionVariant as keyof StyleConstant<"transitions">["durations"]
    ];
  const defaultStyle = {
    transition: `opacity ${transitions[transitionVariant]}`,
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
