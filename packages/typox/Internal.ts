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

const GapSymbol = typeof Symbol === 'function' ? Symbol('gap') : 0xedd1;

export type Gap = typeof GapSymbol & {};

export type Gaps<T extends AnyArray> = Cast<NonNullableFlat<{
    [K in keyof T]?: T[K] | Gap
}>, AnyArray>

export type GapOf = any;