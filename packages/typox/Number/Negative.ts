import type { Zero } from "./_Internal"
import type { Numeric } from "./Numeric"

export type Negative<T extends Numeric> =
    T extends Zero
    ? never
    : `${T}` extends `-${string}`
    ? T
    : never;
