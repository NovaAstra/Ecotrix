import type { AnyArray } from "./Array"

/**
@name Values
@category Array
@description
`Values` 类型用于获取数组类型 `T` 中的所有元素的类型。
- 它通过索引签名 `[number]` 来访问数组 `T` 中的所有元素类型，从而返回一个联合类型，表示数组中可能的所有值。

@template T - 需要操作的数组类型，必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。

@example
```ts
import type {Values} from '@ecotrix/typox';

type A = Values<[1, 2, 3]>;
//  ^? 3 | 1 | 2

type B = Values<readonly ['a', 'b', 'c']>;
//  ^? 'a' | 'b' | 'c'

type C = Values<number[]>;
//  ^? number

type D = Values<[]>;
//  ^? never
```
**/
export type Values<T extends AnyArray> = T[number];