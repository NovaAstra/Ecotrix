import type { AnyArray } from "./Array"

/**
 * @name Concat
 * @category [[Array]]
 * @description
 * `Concat` 类型用于将两个数组类型 `T1` 和 `T2` 合并为一个新数组类型。
 * 
 * @template T1
 * @template T2
 * 
 * @example
 * ```ts
 * import type {Concat} from '@ecotrix/typox';
 * 
 * type A = Concat<[number, string], [boolean, null]>;
 * //  ^? [number, string, boolean, null]
 *
 * type B = Concat<[], [boolean, null]>;
 * //  ^? [boolean, null]
 * ```
 */
export type Concat<T1 extends AnyArray, T2 extends AnyArray> =
    [...T1, ...T2]