import type { AnyArray } from "./Array"

/**
@name Prepend
@category Array
@description
`Prepend` 类型用于将元素类型 `L` 插入到数组类型 `T` 的前面，返回一个新的数组类型。
- 该类型将 `L` 放在新数组的首位，后续元素则是数组 `T` 中的元素类型。

@template T - 需要操作的原数组类型，必须是 `AnyArray` 类型（即 `Array<T>` 或 `ReadonlyArray<T>`）。
@template L - 要插入到数组前面的元素类型。

@example
```ts
import type {Prepend} from '@ecotrix/typox';

type A = Prepend<[2, 3], 1>;
//  ^? [1, 2, 3]

type B = Prepend<readonly [2, 3], 1>;
//  ^? [1, 2, 3]

type C = Prepend<[], string>;
//  ^? [string]

type D = Prepend<number[], boolean>;
//  ^? [boolean, ...number[]]
```
**/
export type Prepend<T extends AnyArray, L extends any> =
    [L, ...T]