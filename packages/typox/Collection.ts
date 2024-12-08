import type { Gap } from "./Primitive"
import type { NonNullableFlat } from "./Object"
import type { AnyArray } from "./Array"

export type Cast<T1, T2> =
    T1 extends unknown
    ? T2 extends unknown
    ? T1 extends T2
    ? T1
    : T2
    : never
    : never;

export type Gaps<T extends AnyArray> = Cast<NonNullableFlat<{
    [K in keyof T]?: T[K] | Gap
}>, AnyArray>