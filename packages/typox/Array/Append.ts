import type { AnyArray } from "./Array"

/**
@name Append
@category Array
@description
`Append` 类型用于将元素类型 `L` 添加到数组类型 `T` 的末尾，返回一个新的数组类型。
- 该类型将 `L` 放在新数组的末尾，前面的元素保持原数组 `T` 中的顺序和类型。

@template T - 需要操作的原数组类型，必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。
@template L - 要添加到数组末尾的元素类型。

@example
```ts
import type {Append} from '@ecotrix/typox';

type A = Append<[1, 2], 3>;
//  ^? [1, 2, 3]

type B = Append<readonly [1, 2], 3>;
//  ^? readonly [1, 2, 3]

type C = Append<[], string>;
//  ^? [string]

type D = Append<number[], boolean>;
//  ^? [...number[], boolean]
```
**/
export type Append<T extends AnyArray, L extends any> =
    [...T, L]