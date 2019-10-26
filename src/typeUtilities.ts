import { Theme } from './types';
import { useThemeContext } from './styleConstants';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Required<T> = T extends object ? { [P in keyof T]-?: NonNullable<T[P]> } : T;

export type GetComponentProps<T> = T extends React.ComponentType<infer P> | React.Component<infer P> ? P : never;

export type StyleConstant<T extends keyof Theme> = Theme[T];

/* tslint:disable */
export type ArgumentType<F extends Function> = F extends (...args: infer A) => any ? A : never;

export type Theme = ReturnType<typeof useThemeContext>;
