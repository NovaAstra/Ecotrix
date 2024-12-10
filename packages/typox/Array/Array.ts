/**
 * @name AnyArray
 * @category [[Array]]
 * @description
 * `AnyArray` 类型表示一个可以是可变数组 (`Array<T>`) 或只读数组 (`ReadonlyArray<T>`)。
 * 
 * 该类型允许对数组元素进行灵活操作，无论数组是可变的还是只读的。
 * 
 * @template T - 数组元素的类型，可以是任意类型。
 * 
 * @example
 * ```ts
 * import type {AnyArray} from '@ecotrix/typox';
 * 
 * const average = (numbers: AnyArray<number>) => numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
 *
 * const two = average([1, 2, 3]);
 * //  ^? number
 *
 * const three = average([1, 2, 3, 4, 5] as const);
 * //  ^? number
 * ```
 */
export type AnyArray<T = any> = Array<T> | ReadonlyArray<T>;