import type { PositiveInfinity, NegativeInfinity } from "./_Internal"

export type Finite<T extends number> =
    T extends PositiveInfinity | NegativeInfinity
    ? never
    : T;
