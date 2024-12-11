import type { Cast, Placeholder } from "../Any/_api"
import type { AnyArray, Pop } from "../Array/_api"
import type { NonNullableFlat } from "../Object/_api"


/**
@name Gaps
@internal 
@category Function
@description
`Gaps` 类型用于将数组类型 `T` 转换为一个新的类型，其中数组的每个元素都可以是原类型 `T[K]` 或者
是占位符 `Placeholder`，并且返回一个非空的数组类型。

- 对于每个数组元素，类型可能是原来的类型 `T[K]` 或者 `Placeholder`。
- 通过 `Cast` 和 `NonNullableFlat`，确保最终结果类型没有 `null` 或 `undefined`，并符合数组的类型。

@template T

@example
```ts
import type {Gaps} from '@ecotrix/typox';

type A = Gaps<[1, 2, 3]>;
//  ^? [1 | Placeholder, 2 | Placeholder, 3 | Placeholder]

type B = Gaps<readonly [string, number]>;
//  ^? [string | Placeholder, number | Placeholder]

type C = Gaps<[string | null, number | undefined]>;
//  ^? [string, number]
```
**/
type Gaps<T extends AnyArray> = Cast<NonNullableFlat<{
    [K in keyof T]?: T[K] | Placeholder
}>, AnyArray>

type UnionFactorial<T extends AnyArray> = T extends readonly [] ? never
    : T | UnionFactorial<Pop<T>>;

type Union2Intersection<U> = (
    U extends unknown ? (arg: U) => void : never
) extends (arg: infer I) => void ? I
    : never;

type A = UnionFactorial<[1, 2, 3]>