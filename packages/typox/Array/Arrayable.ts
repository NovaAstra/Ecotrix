/**
@name Arrayable
@category Array
@description
`Arrayable` 类型允许某个类型 `T` 被表示为：
- 单一类型 `T`。
- 或者一个只读数组 `readonly T[]`。

⚠️ **警告**：这使得可以接受单个元素或者一个包含多个元素的数组，提供更大的灵活性。

@template T - 数组元素的类型。

@example
```ts
import type {Arrayable} from '@ecotrix/typox';

type A = Arrayable<string>;
//  ^? string | readonly string[]

type B = Arrayable<number[]>;
//  ^? number[] | readonly number[][]

type C = Arrayable<boolean>;
//  ^? boolean | readonly boolean[]
```
**/
export type Arrayable<T> = T | readonly T[];

