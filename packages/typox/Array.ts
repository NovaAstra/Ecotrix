export type AnyArray<T = any> = Array<T>

export type ReadonlyArray<T = any> = Readonly<AnyArray<T>>

export type Arrayable<T> = T | AnyArray<T>;

export type ArrayValues<T extends AnyArray> = T[number];

export type ArrayLength<T extends AnyArray> =
    T extends { readonly length: infer L }
    ? L
    : never;

export type ArrayTail<T extends AnyArray> =
    T extends []
    ? T
    : T extends [any?, ...infer L]
    ? L
    : T

export type ArrayHead<T extends AnyArray> =
    T["length"] extends 0
    ? never
    : T[0];

export type ArrayLast<T extends AnyArray> =
    T[ArrayLength<ArrayTail<T>>]

export type ArrayLastKey<T extends AnyArray> =
    ArrayLength<ArrayTail<T>>

export type ArrayConcat<
    T1 extends AnyArray,
    T2 extends AnyArray
> = [...T1, ...T2]

export type ArrayAppend<T extends AnyArray, L = any> =
    [...T, L]

export type ArrayPrepend<T extends AnyArray, L = any> =
    [L, ...T]
