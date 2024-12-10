import type { AnyArray } from "./AnyArray"

/**
 * @name Length
 * @category [[Array]]
 * @description
 * `Length` 类型用于提取数组类型的 `length` 属性。
 * 
 * @template T - 数组类型，必须是 `AnyArray`。
 * 
 * @example
 * ```ts
 * import type {Length} from '@ecotrix/typox';
 * 
 * type LengthOfTuple = Length<[number, string, boolean]>; 
 * //   ^? 3
 * 
 * type LengthOfArray = Length<number[]>
 * //   ^? number
 * ```
 */
export type Length<T extends AnyArray> =
    T extends { readonly length: infer L }
    ? L
    : never;