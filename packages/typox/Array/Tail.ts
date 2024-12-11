import { AnyArray } from "./Array"


/**
@name Tail

@category Array

@description
`Tail` 类型用于从一个数组类型 `T` 中移除第一个元素，返回剩余部分的类型。
- 如果 `T` 是一个非空数组，则返回数组去掉第一个元素后的类型（剩余部分）。
- 如果 `T` 是空数组，则返回 `never`。

@template T - 数组类型，必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。

@example
```ts
import type {Tail} from '@ecotrix/typox';

type A = Tail<[1, 2, 3]>;
//  ^? [2, 3]

type B = Tail<readonly [1, 2, 3, 4]>;
//  ^? [2, 3, 4]

type C = Tail<number[]>;
//  ^? number[]

type D = Tail<[]>;
//  ^? never
```
**/
export type Tail<T extends AnyArray> =
    T extends readonly []
    ? never
    : T extends readonly [any?, ...infer L]
    ? L
    : never