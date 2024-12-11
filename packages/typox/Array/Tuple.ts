/**
@name Tuple
@category Array
@description
`Tuple` 类型表示一个元组，其中：
- 第一个元素是可选的。
- 后续元素的类型与第一个元素相同。
- 默认情况下，第一个元素的类型是 `any`，但可以通过泛型参数 `T` 来指定。

@template T - 元组中元素的类型，默认为 `any`。

@example
```ts
import type {Tuple} from '@ecotrix/typox';

type A = Tuple<number>;
//  ^? [number?, ...number[]]

type B = Tuple<string>;
//  ^? [string?, ...string[]]

type C = Tuple<[]>;
//  ^? [[], ...[]]

type D = Tuple;
//  ^? [any?, ...any[]]
```
**/
export type Tuple<T = any> = [T?, ...T[]];
