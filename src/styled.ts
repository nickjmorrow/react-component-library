import isPropValid from '@emotion/is-prop-valid';
import type { ShouldForwardProp } from 'styled-components';

// styled-components v6 forwards every prop to the DOM. Library components pass theme objects and
// flags as props, so keep the v5 behaviour of only forwarding valid HTML attributes to DOM elements.
export const shouldForwardProp: ShouldForwardProp<'web'> = (prop, target) =>
    typeof target !== 'string' || isPropValid(prop);
