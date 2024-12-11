const placeholder = typeof Symbol === 'function' ? Symbol('placeholder') : 0xedd1;

/**
@name Placeholder
@category Any
@description
`Placeholder` 类型用于表示一个特殊的占位符值，该占位符可以用于标识某些值或状态（例如函数参数默认值、缺省值等）。
- 如果环境支持 `Symbol`，则使用 `Symbol('placeholder')` 创建一个唯一的符号值。
- 如果环境不支持 `Symbol`，则退回使用一个固定的数值 `0xedd1`，确保占位符在不同的 JavaScript 环境中都有定义。

@example
```ts
import type {Placeholder} from '@ecotrix/typox';

// 使用 `Placeholder` 类型定义占位符
const myPlaceholder: Placeholder = Symbol('placeholder');

// 在不支持 `Symbol` 的环境中，`myPlaceholder` 将是一个固定的数值
const myPlaceholder2: Placeholder = 0xedd1;
```
**/
export type Placeholder = typeof placeholder & {};