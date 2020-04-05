import * as React from 'react';
import { Transition } from 'react-transition-group';
import { StyleConstant, GetComponentProps } from '../../typeUtilities';
import { ThemeContext } from '~/theming';

type TransitionProps = GetComponentProps<typeof Transition>;

export const Fade: React.SFC<
    {
        in: boolean;
        transitionVariant?: keyof StyleConstant<'transitions'>;
        style?: React.CSSProperties;
        styleKeys?: any[]; // TODO: this should be array of html style css attributes
        mounted?: React.CSSProperties;
        unmounted?: React.CSSProperties;
        enterTimeout?: number;
        mountOnEnter?: boolean;
        unmountOnExit?: boolean;
    } & Omit<TransitionProps, 'timeout'>
> = ({
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
    const defaultMounted = { opacity: 1 };
    const defaultUnmounted = { opacity: 0 };
    const mounted = { ...defaultMounted, ...customMounted };
    const unmounted = { ...defaultUnmounted, ...customUnmounted };

    const transitionStyles = {
        entering: unmounted,
        entered: mounted,
        exiting: unmounted,
        exited: unmounted,
    };

    const { transitions } = React.useContext(ThemeContext);
    const duration = transitions.durations[transitionVariant as keyof StyleConstant<'transitions'>['durations']];

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
            in={inProp}
            timeout={{ enter: enterTimeout, exit: duration }}
            unmountOnExit={unmountOnExit}
            mountOnEnter={mountOnEnter}
            {...props}
        >
            {state => <div style={{ ...defaultStyle, ...transitionStyles[state] }}>{children}</div>}
        </Transition>
    );
};
