import type { AnyArray } from "./Array"

/**
@name Reverse
@category Array
@description
`Reverse` 类型用于反转数组类型 `T` 中元素的顺序，返回一个新数组类型。
- 该类型通过递归方式将数组的第一个元素移到末尾，直到数组为空为止。

@template T - 需要反转的数组类型，必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。

@example
```ts
import type {Reverse} from '@ecotrix/typox';

type A = Reverse<[1, 2, 3]>;
//  ^? [3, 2, 1]
```
**/
export type Reverse<T extends AnyArray> =
    T extends [infer L, ...infer R]
    ? [...Reverse<R>, L]
    : [];