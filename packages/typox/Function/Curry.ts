import type { Cast, Placeholder } from "../Any/_api"
import type { AnyArray } from "../Array/_api"
import type { NonNullableFlat } from "../Object/_api"


/**
 * @name Gaps
 * @private
 * @category [[Function]]
 * @description
 * `Gaps` 类型生成一个新数组类型，该数组允许在原始数组 `T` 中的每个位置插入一个占位符（`Placeholder`）。
 * - 占位符是一个特殊的标记，用于表示数组中可以被替换或忽略的位置。
 * - 类型通过 `NonNullableFlat` 和 `Cast` 实现，确保生成的新数组类型是一个有效的数组类型。
 * 
 * @template T
 * 
 */
export type Gaps<T extends AnyArray> = Cast<NonNullableFlat<{
    [K in keyof T]?: T[K] | Placeholder
}>, AnyArray>