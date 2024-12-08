import type { ReadonlyArray } from "./Array"

export type AnyFunction<
    T extends ReadonlyArray = any[],
    R = any
> = (...args: T) => R;

export type Parameters<F extends AnyFunction> =
    F extends ((...args: infer L) => any)
    ? L
    : never