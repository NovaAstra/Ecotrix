import { AnyArray } from "./Array"
import { Length } from "./Length"
import { Tail } from "./Tail"

/**
@name Last

@category Array

@description
`Last` 类型用于从一个数组类型 `T` 中提取出最后一个元素的类型。
- 如果 `T` 是一个非空数组，则返回数组的最后一个元素类型。
- 如果 `T` 是空数组，则返回 `never`，表示没有元素可提取。

@template T - 数组类型，必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。

@example
```ts
import type {Last} from '@ecotrix/typox';

type A = Last<[1, 2, 3]>;
//  ^? 3

type B = Last<readonly [1, 2, 3, 4]>;
//  ^? 4

type C = Last<number[]>;
//  ^? number

type D = Last<[]>;
//  ^? never
```
**/
export type Last<T extends AnyArray> =
    T[Length<Tail<T>>]