/**
@name AnyArray
@category Array
@description
`AnyArray` 类型定义了一个元素类型为 `T` 的数组，可以是可变数组 (`Array<T>`) 或只读数组 (`ReadonlyArray<T>`)。
- 如果需要对数组进行修改，使用 `Array<T>`。
- 如果不希望修改数组，使用 `ReadonlyArray<T>`。

⚠️ **警告**：通过默认值 `T = any`，可以方便地表示任意类型的数组。

@template T - 数组元素的类型，默认为 `any`。

@example
```ts
import type {AnyArray} from '@ecotrix/typox';

type A = AnyArray<string>;
//  ^? string[] | readonly string[]

type B = AnyArray<number[]>;
//  ^? number[][] | readonly number[][]

type C = AnyArray;
//  ^? any[] | readonly any[]
```
**/
export type AnyArray<T = any> = Array<T> | ReadonlyArray<T>;