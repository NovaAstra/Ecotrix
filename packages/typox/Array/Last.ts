import { AnyArray } from "./Array"
import { Length } from "./Length"
import { Tail } from "./Tail"

/**
 * @name Last
 * @category [[Array]]
 * @description
 * `Last` 类型用于提取数组类型的最后一个元素的类型。
 * 
 * @template T - 数组类型，必须是 `AnyArray`。
 * 
 * @example
 * ```ts
 * import type {Last} from '@ecotrix/typox';
 * 
 * type LastElement = Last<[number, string, boolean]>; 
 * //  ^? boolean
 *
 * type EmptyArrayLast = Last<[]>
 * //  ^? never
 * ```
 */
export type Last<T extends AnyArray> =
    T[Length<Tail<T>>]

