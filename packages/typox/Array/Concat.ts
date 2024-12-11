import type { AnyArray } from "./Array"

/**
@name Concat
@category Array
@description
`Concat` 类型用于将两个数组类型 `T1` 和 `T2` 拼接成一个新数组类型。
- `T1` 和 `T2` 必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。
- 返回的新数组类型保留了数组的可变性或只读性。

@template T1 - 第一个数组类型，必须是 `AnyArray`。
@template T2 - 第二个数组类型，必须是 `AnyArray`。

@example
```ts
import type {Concat} from '@ecotrix/typox';

type A = Concat<[1, 2], [3, 4]>;
//  ^? [1, 2, 3, 4]

type B = Concat<readonly [1, 2], [3, 4]>;
//  ^? readonly [1, 2, 3, 4]

type C = Concat<number[], string[]>;
//  ^? (number | string)[]

type D = Concat<readonly string[], readonly number[]>;
//  ^? (string | number)[]
```
**/
export type Concat<T1 extends AnyArray, T2 extends AnyArray> =
    [...T1, ...T2]