import type { AnyArray } from "./Array"

/**
@name Length

@category Array

@description
`Length` 类型用于获取一个数组类型 `T` 的长度。它通过 TypeScript 的条件类型和 `infer` 关键字提取数组的 `length` 属性。
- 如果 `T` 是一个数组（包括只读数组），则返回数组的长度类型。
- 如果 `T` 不是一个数组，则返回 `never`。

@template T - 数组类型，必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。

@example
```ts
import type {Length} from '@ecotrix/typox';

type A = Length<[1, 2, 3]>;
//  ^? 3

type B = Length<readonly [1, 2, 3, 4]>;
//  ^? 4

type C = Length<number[]>;
//  ^? number[]

type D = Length<[]>;
//  ^? 0
```
*/
export type Length<T extends AnyArray> =
    T extends { readonly length: infer L }
    ? L
    : never;