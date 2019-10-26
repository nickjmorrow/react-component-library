import { StyleConstant } from '~/typeUtilities';

export const transitions = {
    fast: '0.15s',
    medium: '0.3s',
    slow: '0.8s',
};

export const transitionTimingFunction = 'cubic-bezier(0.645, 0.045, 0.355, 1.000)';

export const fontFamily = {
    default: 'Roboto, sans-serif',
    title: 'Oleo Script Swash Caps, cursive',
    monospace: 'Fira Mono, monospace',
};

export const lineHeight: {
    [K in 'default']: keyof StyleConstant<'spacing'>;
} = {
    default: 'ss6',
};

export const horizontalWidth: {
    [K in 'paragraph']: keyof StyleConstant<'spacing'>;
} = {
    paragraph: 'ss160',
};

export const colorConstants = {
    background: 'hsl(0, 0%, 100%)',
    transparent: 'transparent',
    shadow: 'hsla(0, 0%, 0%, 0.2)',
    inherit: 'inherit',
};

export const boxShadowOffsets = {
    bso1: ['0 1px 3px', '0 1px 2px'],
    bso2: ['0 3px 6px', '0 2px 4px'],
    bso3: ['0 10px 20px', '0 3px 6px'],
    bso4: ['0 15px 25px', '0 5px 10px'],
    bso5: ['0 20px 40px', '0 7px 14px'],
};

export const defaultShowBoxShadow = true;

// TODO: think about this, probably not right
export const mediaWidth = {
    mobileLandscape: '700px',
};
