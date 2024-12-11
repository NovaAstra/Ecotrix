/**
@name Cast

@category Any

@description
`Cast` 类型用于将类型 `T1` 强制转换为 `T2`，并确保类型兼容性：
- 如果 `T1` 是 `T2` 的子类型，直接返回 `T1`。
- 否则，返回 `T2`，即将 `T1` 强制转换为 `T2` 类型。

⚠️ **警告**：该类型适用于那些需要进行类型转换并确保转换后类型兼容的场景，尤其在类型推导不明确时非常有用

@template T1 - 需要被转换的源类型。
@template T2 - 目标类型。

@example
```ts
import type {Cast} from '@ecotrix/typox';

type A = Cast<string, string | number>;
//  ^? string

type B = Cast<{}, { a: number }>;
//  ^? { a: number }

type E = Cast<{ a: { b: string } }, { a: { b: string; c: number } }>;
//  ^? { a: { b: string; c: number } }
```
**/
export type Cast<T1, T2> =
    T1 extends T2
    ? T1
    : T2

