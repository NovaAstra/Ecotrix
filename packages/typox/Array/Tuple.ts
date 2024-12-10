/**
 * @name Tuple
 * @category [[Array]]
 * @description
 * `Tuple` 类型表示一个元组类型，其第一个元素是可选的，后续元素是该类型的任意数量的元素。
 * 
 * 这种类型常用于需要一个可选元素，且后续元素具有相同类型的场景。
 * 
 * @template T - 元组中每个元素的类型，默认为 `any`。
 * 
 * @example
 * ```ts
 * import type {Tuple} from '@ecotrix/typox';
 * 
 * type StringTuple = Tuple<string>;
 * //  ^? [string?, ...string[]]
 * ```
 */
export type Tuple<T = any> = [T?, ...T[]];

