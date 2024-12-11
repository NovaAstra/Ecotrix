import type { AnyArray } from "../Array/_api"

/**
@name AnyFunction
@category Function
@description
`AnyFunction` 类型用于表示一个函数类型，具有以下特点：
- 函数接受的参数类型是一个数组，默认情况下为 `any[]`。
- 函数的返回值类型可以通过泛型 `R` 来指定，默认为 `any`。
- 该类型适用于定义任意形式的函数签名。

@template T - 参数类型数组，默认为 `any[]`，表示函数可以接受任意类型的参数。
@template R - 函数返回值类型，默认为 `any`，表示函数可以返回任意类型的结果。

@example
```ts
import type {AnyFunction} from '@ecotrix/typox';

type A = AnyFunction<[number, string], boolean>;
//  ^? (args_0: number, args_1: string) => boolean

type B = AnyFunction<[string]>;
//  ^? (args_0: string) => any

type C = AnyFunction;
//  ^? (...args: any[]) => any
```
**/
export type AnyFunction<T extends AnyArray = any[], R = any> = (...args: T) => R;