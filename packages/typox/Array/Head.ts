import type { AnyArray } from "./Array"

/**
 * @name Head
 * @category [[Array]]
 * @description
 * `Head` 类型用于提取数组类型的第一个元素类型。
 * 如果数组为空，则返回 `never`，否则返回数组的第一个元素类型。
 * 
 * @template T - 数组类型，必须是 `AnyArray`。
 * 
 * @example
 * ```ts
 * import type {Head} from '@ecotrix/typox';
 * 
 * type FirstElement = Head<[number, string, boolean]>; 
 * //  ^? number
 *
 * type EmptyArrayHead = Head<[]>; 
 * //  ^? never
 *
 * const numbers: Head<[number, string]> = 42;
 * //  ^? number
 * ```
 */
export type Head<T extends AnyArray> =
    T extends unknown ? (
        T["length"] extends 0
        ? never
        : T[0]
    ) : never
