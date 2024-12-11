import type { Cast, Placeholder } from "../Any/_api"
import type { AnyArray, Length, Append, Prepend, Tail } from "../Array/_api"
import type { NonNullableFlat } from "../Object/_api"
import type { AnyFunction } from "./Function"


type Pos<I extends AnyArray> = Length<I>

type Next<I extends AnyArray> = Prepend<I, unknown>

type Prev<I extends AnyArray> = Tail<I>

type GapOf<
    T1 extends AnyArray,
    T2 extends AnyArray,
    TN extends AnyArray,
    L extends AnyArray
> = T1[Pos<L>] extends Placeholder
    ? Append<T2[Pos<L>], TN>
    : TN

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
```
**/
type Gaps<T extends AnyArray> = Cast<NonNullableFlat<{
    [K in keyof T]?: T[K] | Placeholder
}>, AnyArray>

export type Curry<T extends AnyFunction> =
    <
        P extends Gaps<Parameters<T>>,
        G extends AnyArray = any[],
        R extends any = ReturnType<T>
    >(...args: Gaps<Parameters<T>> | P) =>
        any extends never
        ? R
        : Curry<(...args: G) => R>

type A = (a: string, b: number, c: string | number) => number;
type B = Parameters<A>
type C = Gaps<B>