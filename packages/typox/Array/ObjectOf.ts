import type { AnyArray } from "./Array"
import type { Length } from "./Length"

/**
@name ObjectOf
@category Array
@description
`ObjectOf` 将数组类型 `T` 转换为对象类型：
- 如果 `T` 是动态数组（`number` 索引），则转换为 `{ [key: number]: T[number] }`。
- 如果 `T` 是固定长度数组（元组），则转换为 `{ 0: T[0], 1: T[1], ... }`，并移除数组的方法属性。

@template T - 需要转换的数组类型。

@example
```ts
import type {ObjectOf} from '@ecotrix/typox';

type A = ObjectOf<[1, 2, 3]>;
//  ^? { 0: 1, 1: 2, 2: 3 }

type B = ObjectOf<number[]>;
//  ^? { [x: number]: number; }

type C = ObjectOf<readonly [1, 2, 3]>;
//  ^? { readonly 0: 1, readonly 1: 2, readonly 2: 3 }

type D = ObjectOf<[]>;
//  ^? {}
```
*/
export type ObjectOf<T extends AnyArray> =
    T extends unknown
    ? number extends Length<T>
    ? Pick<T, number>
    : Omit<T, keyof any[]>
    : never