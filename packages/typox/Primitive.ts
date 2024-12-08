const placeholder = typeof Symbol === 'function' ? Symbol('x') : 0xedd1;

export type Placeholder = typeof placeholder & {};

export type Primitive =
    | string
    | number
    | boolean
    | bigint
    | symbol
    | undefined
    | null;

export type Key = string | number | symbol