import type { AnyArray } from "./Array"

export type AnyFunction<T extends AnyArray = any[], R = any> = (...args: T) => R;