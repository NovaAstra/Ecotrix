import type { AnyArray } from "./Array"

/**
@name Pop
@category Array
@description
`Pop` 类型用于从数组类型 `T` 中移除最后一个元素，返回剩余的数组类型。
- 如果 `T` 是非空数组，则返回去掉最后一个元素后的新数组类型。
- 如果 `T` 是空数组，则返回 `T` 本身，表示没有元素可移除。

@template T - 数组类型，必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。

@example
```ts
import type {Pop} from '@ecotrix/typox';

type A = Pop<[1, 2, 3]>;
//  ^? [1, 2]

type B = Pop<readonly [1, 2, 3, 4]>;
//  ^? readonly [1, 2, 3]

type C = Pop<number[]>;
//  ^? number[]

type D = Pop<[]>;
//  ^? []
```
**/
export type Pop<T extends AnyArray> =
    T extends (readonly [...infer L, any] | readonly [...infer L, any?])
    ? L
    : T