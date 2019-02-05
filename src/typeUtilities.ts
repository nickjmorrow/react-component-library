export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Required<T> = T extends object
	? { [P in keyof T]-?: NonNullable<T[P]> }
	: T;
