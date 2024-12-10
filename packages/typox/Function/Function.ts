import type { AnyArray } from "../Array/_api"

/**
 * @name AnyFunction
 * @category [[Function]]
 * @description
 * `AnyFunction` 类型表示一个可以接受任意类型参数并返回任意类型结果的函数。
 * 
 * @template T - 函数参数类型的元组（默认为 `any[]`）。
 * @template R - 函数返回值类型（默认为 `any`）。
 * 
 * @example
 * ```ts
 * import type {AnyFunction} from '@ecotrix/typox';
 * 
 * type StringFunction = AnyFunction<[string], string>;
 * const greet: StringFunction = (name) => `Hello, ${name}`;
 * //  ^? (args_0: string) => string
 * 
 * type VoidFunction = AnyFunction<[], void>;
 * const logMessage: VoidFunction = () => console.log('Message');
 * //  ^? () => void
 * ```
 */
export type AnyFunction<T extends AnyArray = any[], R = any> = (...args: T) => R;