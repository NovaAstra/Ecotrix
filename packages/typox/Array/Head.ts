import type { AnyArray } from "./Array"

/**
@name Head
@category Array
@description
`Head` 类型用于从数组类型 `T` 中提取第一个元素的类型。
- 如果 `T` 是非空数组，则返回数组的第一个元素类型。
- 如果 `T` 是空数组，则返回 `never`，表示没有元素可提取。

@template T - 数组类型，必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。

@example
```ts
import type {Head} from '@ecotrix/typox';

type A = Head<[1, 2, 3]>;
//  ^? 1

type B = Head<readonly [1, 2, 3, 4]>;
//  ^? 1

type C = Head<number[]>;
//  ^? number

type D = Head<[]>;
//  ^? never
```
**/
export type Head<T extends AnyArray> =
    T extends unknown ? (
        T["length"] extends 0
        ? never
        : T[0]
    ) : never