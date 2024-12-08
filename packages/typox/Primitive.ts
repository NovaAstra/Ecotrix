const GapSymbol = typeof Symbol === 'function' ? Symbol('gap') : 0xedd1;

export type Gap = typeof GapSymbol & {};

export type Primitive =
    | string
    | number
    | boolean
    | bigint
    | symbol
    | undefined
    | null;

export type Key = string | number | symbol