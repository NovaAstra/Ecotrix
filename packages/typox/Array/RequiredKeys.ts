import type { ObjectOf } from "./ObjectOf"
import type { AnyArray } from "./Array"

/**
@name RequiredKeys
@category Array
@description
`RequiredKeys` 将数组类型 `T` 转换为一个对象，其中所有的键（索引）都是必需的（非可选）。
- 如果输入是一个元组（固定长度数组），则返回具有必需键的对象。
- 如果输入是一个动态数组，则返回 `{ [key: number]: T[number] }`，并确保键是必需的。

@template T - 需要操作的数组类型。

@example
```ts
import type {RequiredKeys} from '@ecotrix/typox';

type A = RequiredKeys<[1, 2?, 3?]>;
//  ^? { 0: 1, 1: 2 | undefined, 2: 3 | undefined }

type B = RequiredKeys<number[]>;
//  ^? { [key: number]: number }

type C = RequiredKeys<[]>;
//  ^? {}
```
*/
export type RequiredKeys<T extends AnyArray> =
    Required<T>