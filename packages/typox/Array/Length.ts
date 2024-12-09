import type { AnyArray } from "./Array"

export type Length<T extends AnyArray> =
    T extends { readonly length: infer L }
    ? L
    : never;