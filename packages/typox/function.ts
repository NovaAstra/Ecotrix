import type { AnyArray } from "./array"

export type AnyFunction<T extends AnyArray = any[], R = any> = (...args: T) => R;

