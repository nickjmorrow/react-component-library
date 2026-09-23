import * as React from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import { StyleConstant } from '../../typeUtilities';
import { ThemeContext } from '~/theming';

export const Fade: React.FC<{
    in: boolean;
    children?: React.ReactNode;
    transitionVariant?: keyof StyleConstant<'transitions'>['durations'];
    style?: React.CSSProperties;
    styleKeys?: string[];
    mounted?: React.CSSProperties;
    unmounted?: React.CSSProperties;
    enterTimeout?: number;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    appear?: boolean;
    onEntered?: () => void;
    onExited?: () => void;
}> = ({
    children,
    in: inProp,
    style,
    styleKeys = [],
    unmounted: customUnmounted = {},
    mounted: customMounted = {},
    transitionVariant = 'fast',
    enterTimeout = 0,
    mountOnEnter = false,
    unmountOnExit = false,
    ...props
}) => {
    // react-transition-group falls back to findDOMNode (removed in React 19) without a nodeRef.
    const nodeRef = React.useRef<HTMLDivElement>(null);
    const defaultMounted = { opacity: 1 };
    const defaultUnmounted = { opacity: 0 };
    const mounted = { ...defaultMounted, ...customMounted };
    const unmounted = { ...defaultUnmounted, ...customUnmounted };

    const transitionStyles: Record<TransitionStatus, React.CSSProperties> = {
        entering: unmounted,
        entered: mounted,
        exiting: unmounted,
        exited: unmounted,
        unmounted: unmounted,
    };

    const { transitions } = React.useContext(ThemeContext);
    const duration = transitions.durations[transitionVariant];

    const transitionInfo = transitions[transitionVariant];

    const styleKeysWithOpacity = ['opacity', ...styleKeys];
    const transition = styleKeysWithOpacity.map(sk => `${sk} ${transitionInfo}`).join(', ');

    const defaultStyle = {
        transition,
        width: 'inherit',
        opacity: 0,
        ...style,
    };
    return (
        <Transition
            nodeRef={nodeRef}
            in={inProp}
            timeout={{ enter: enterTimeout, exit: duration }}
            unmountOnExit={unmountOnExit}
            mountOnEnter={mountOnEnter}
            {...props}
        >
            {state => (
                <div ref={nodeRef} style={{ ...defaultStyle, ...transitionStyles[state] }}>
                    {children}
                </div>
            )}
        </Transition>
    );
};
