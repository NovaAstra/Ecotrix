export type Cast<T1, T2> =
    T1 extends unknown
    ? T2 extends unknown
    ? T1 extends T2
    ? T1
    : T2
    : never
    : never;