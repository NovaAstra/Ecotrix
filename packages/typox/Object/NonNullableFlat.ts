/**
 * @name NonNullableFlat
 * @category [[Object]]
 * @description
 * `NonNullableFlat` 类型用于将类型 `T` 中的每个属性移除 `null` 和 `undefined`，并返回一个新类型。
 * - 它通过 `NonNullable` 工具类型对每个属性进行处理。
 * - 生成的新类型是浅层次的，即仅处理第一层的属性，不会递归处理嵌套对象。
 * 
 * @template T
 * 
 * @example
 * ```ts
 * import type {NonNullableFlat} from '@ecotrix/typox';
 * 
 * type Example = {
 *   name: string | null;
 *   age: number | undefined;
 *   address?: string | null;
 * };
 * 
 * //  ^? {
 *          name: string;
 *          age: number;
 *          address?: string;
 *        }
 * ```
 */
export type NonNullableFlat<T> = {
    [K in keyof T]: NonNullable<T[K]>
} & {}