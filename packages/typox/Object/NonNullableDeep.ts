import type { Intrinsic } from "../Primitive/_api"

/**
@name NonNullableDeep
@category Object
@description
`NonNullableDeep` 类型用于递归地将对象类型 `T` 中所有嵌套属性的 `null` 和 `undefined` 去除。
- 适用于需要确保对象的每个属性，包括嵌套属性，都不为 `null` 或 `undefined` 的场景。
- 深度递归所有属性，去除 `null` 和 `undefined`，如果遇到基础类型则不再递归。

@template T - 需要操作的对象类型。

@example
```ts
import type {NonNullableDeep} from '@ecotrix/typox';

type A = NonNullableDeep<{ a: string | null, b: { c: number | undefined, d: string | null } }>;
//  ^? { a: string, b: { c: number, d: string } }

type B = NonNullableDeep<{ a: null, b: { c: undefined, d: null } }>;
//  ^? { a: never, b: { c: never, d: never } }

type C = NonNullableDeep<{ a: string | null | undefined }>;
//  ^? { a: string }

type D = NonNullableDeep<{ a: { b: string | null, c: number | undefined } }>;
//  ^? { a: { b: string, c: number } }
```
**/
export type NonNullableDeep<T> = {
    [K in keyof T]: T[K] extends Intrinsic
    ? T[K]
    : NonNullableDeep<NonNullable<T[K]>>
}
