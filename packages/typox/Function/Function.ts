import type { ReadonlyArray } from "../Array/_api"

export type AnyFunction<T extends ReadonlyArray = any[], R = any> = (...args: T) => R;