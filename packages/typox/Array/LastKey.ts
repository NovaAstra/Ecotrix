import type { AnyArray } from "./Array"
import type { Length } from "./Length"
import type { Tail } from "./Tail"

/**
@name LastKey
@category Array
@description
`LastKey` 类型用于获取数组类型 `T` 的最后一个元素的索引。
- 通过计算数组去掉第一个元素后的长度，返回最后一个元素的索引。

@template T - 需要操作的数组类型，必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。

@example
```ts
import type {LastKey} from '@ecotrix/typox';

type A = LastKey<[1, 2, 3]>;
//  ^? 2

type B = LastKey<readonly ['a', 'b', 'c']>;
//  ^? 2

type C = LastKey<[]>;
//  ^? never
```
**/
export type LastKey<T extends AnyArray> =
    Length<Tail<T>>