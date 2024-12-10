/**
 * @name Arrayable
 * @category [[Array]]
 * @description
 * `Arrayable` 类型表示一个可以是单一类型值（`T`）或者是该类型的只读数组（`readonly T[]`）。
 * 
 * 该类型允许对数组元素进行灵活操作，无论数组是可变的还是只读的。
 * 
 * @template T - 数组元素的类型，可以是任意类型。
 * 
 * @example
 * ```ts
 * import type {Arrayable} from '@ecotrix/typox';
 * 
 * type StringOrStringArray = Arrayable<string>;
 * //  ^? string | readonly string[]
 * ```
 */
export type Arrayable<T> = T | readonly T[];

