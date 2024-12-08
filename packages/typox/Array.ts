
export type AnyArray<T = any> = Array<T>

export type ReadonlyArray<T = any> = Readonly<AnyArray<T>>

export type Arrayable<T> = T | AnyArray<T>;

export type ArrayValues<T extends AnyArray> = T[number];

export type Length<T extends AnyArray> =
    T extends { readonly length: infer L }
    ? L
    : never;

export type Tail<T extends AnyArray> =
    T extends []
    ? T
    : T extends [any?, ...infer L]
    ? L
    : T

export type Head<T extends AnyArray> =
    T["length"] extends 0
    ? never
    : T[0];

export type Last<T extends AnyArray> =
    T[Length<Tail<T>>]

export type LastKey<T extends AnyArray> =
    Length<Tail<T>>

export type Concat<
    T1 extends AnyArray,
    T2 extends AnyArray
> = [...T1, ...T2]

export type Append<T extends AnyArray, L extends any> =
    [...T, L]

export type Prepend<T extends AnyArray, L extends any> =
    [L, ...T]
