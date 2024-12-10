import type { Intrinsic } from "../Primitive/_api"

/**
 * @name NonNullableDeep
 * @category [[Object]]
 * @description
 * `NonNullableDeep` 类型递归地移除类型 `T` 中的所有 `null` 和 `undefined`，包括嵌套的对象和数组。
 * - 对于基础类型（`Intrinsic`），保持其原始类型。
 * - 对于嵌套类型（如对象、数组等），递归处理每个属性。
 * - 该类型适用于需要完全移除复杂对象中的 `null` 和 `undefined` 值的场景。
 * 
 * @template T
 * 
 * @example
 * ```ts
 * import type {NonNullableFlat} from '@ecotrix/typox';
 * 
 * type Example = {
 *     name: string | null;
 *     age: number | undefined;
 *     address?: string | null;
 *     nested: {
 *         key: string | null;
 *         values: Array<string | undefined>;
 *     } | null
 * };
 * 
 * //  ^?  {
 *            name: string;
 *            age: number;
 *            nested: {
 *              key: string;
 *              values: string[];
 *            };
 *         }
 * ```
 */
export type NonNullableDeep<T> = {
    [K in keyof T]: T[K] extends Intrinsic
    ? T[K]
    : NonNullableDeep<NonNullable<T[K]>>
}

