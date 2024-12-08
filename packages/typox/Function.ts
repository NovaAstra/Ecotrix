import type { ReadonlyArray, AnyArray } from "./Array"
import type { Gaps } from "./Internal"

export type AnyFunction<
    T extends ReadonlyArray = any[],
    R = any
> = (...args: T) => R;

export type Parameters<T extends AnyFunction> =
    T extends ((...args: infer L) => any)
    ? L
    : never

export type Curry<T extends AnyFunction> =
    <
        P extends Gaps<Parameters<T>>,
        G extends AnyArray,
        R extends any = ReturnType<T>
    >(...args: Gaps<Parameters<T>> | P) => R;