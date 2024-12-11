import type { AnyArray } from "./Array"

/**
@name At
@category Array
@description
`At` 类型用于从数组类型 `T` 中获取指定索引 `I` 的元素类型。
- 如果索引 `I` 超出数组类型 `T` 的范围，则结果为 `undefined`。
- 适用于需要从数组中按索引精确获取类型的场景。

@template T - 需要操作的数组类型，必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。
@template I - 需要获取的索引，必须是 `number` 类型。

@example
```ts
import type {At} from '@ecotrix/typox';

type A = At<[1, 2, 3], 0>;
//  ^? 1

type B = At<[1, 2, 3], 2>;
//  ^? 3

type C = At<[1, 2, 3], 5>;
//  ^? undefined

type D = At<readonly [1, 2, 3], 1>;
//  ^? 2

type E = At<number[], 2>;
//  ^? number
```
**/
export type At<T extends AnyArray, I extends number> = T[I];