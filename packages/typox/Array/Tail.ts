import type { AnyArray } from "./Array"

/**
 * @name Tail
 * @category [[Array]]
 * @description
 * `Tail` 类型用于提取数组类型的尾部元素类型。 
 * 
 * @template T - 数组类型，必须是 `AnyArray`。
 * 
 * @example
 * ```ts
 * import type {Tail} from '@ecotrix/typox';
 * 
 * const tail = <Type extends AnyArray>(tuple: readonly [...Type]) => tuple.slice(1) as Tail<Type>;
 * 
 * const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
 *
 * const nonZeroDigits = tail(digits);
 * //   ^? [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 */
export type Tail<T extends AnyArray> =
    T extends readonly []
    ? never
    : T extends readonly [any?, ...infer L]
    ? L
    : never








