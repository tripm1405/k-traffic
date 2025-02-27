export type KObject = Record<string, unknown>;
export type KWithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
