/**
 * @name Cast
 * @category [[Any]]
 * @description
 * `Cast` 类型用于将一个类型 `T1` 强制转换为另一个类型 `T2`，并根据条件选择适当的类型。
 * - 如果 `T1` 可以赋值给 `T2`，返回 `T1`。
 * - 否则返回 `T2`，即强制转换为 `T2` 类型。
 * - 该类型适用于需要类型转换并且要确保类型兼容的场景。
 * 
 * @template T1 - 需要被转换的类型。
 * @template T2 - 目标类型。
 * 
 * @example
 * ```ts
 * import type {Cast} from '@ecotrix/typox';
 * 
 * type A = Cast<string, string | number>;
 * //  ^? string
 * 
 * type B = Cast<{}, { a: number }>;
 * //  ^? { a: number }
 * ```
 */
export type Cast<T1, T2> =
    T1 extends unknown
    ? T2 extends unknown
    ? T1 extends T2
    ? T1
    : T2
    : never
    : never;

    