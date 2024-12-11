/**
@name NonNullableFlat
@category Object
@description
`NonNullableFlat` 类型用于将对象类型 `T` 中的每个属性类型转换为 `NonNullable`。
- 确保对象的每个属性都不能为 `null` 或 `undefined`。
- 如果某个属性是 `null` 或 `undefined`，则返回该属性的类型的非空版本。

@template T - 需要操作的对象类型。

@example
```ts
import type {NonNullableFlat} from '@ecotrix/typox';

type A = NonNullableFlat<{ a: string | null, b: number | undefined }>;
//  ^? { a: string, b: number }

type B = NonNullableFlat<{ a: null, b: undefined }>;
//  ^? { a: never, b: never }

type C = NonNullableFlat<{ a: string }>;
//  ^? { a: string }

type D = NonNullableFlat<{ a: string | null | undefined }>;
//  ^? { a: string }
```
**/
export type NonNullableFlat<T> = {
    [K in keyof T]: NonNullable<T[K]>
} & {}