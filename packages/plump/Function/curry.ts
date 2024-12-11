import type { AnyArray, AnyFunction } from "@ecotrix/typox"

export function curry(fn: AnyFunction, ...args: AnyArray) {
    const curried: any = (..._args: AnyArray) =>
        _args.length >= fn.length
            ? fn(..._args)
            : curried.bind(null, ..._args);

    return curried;
}


const result = curry((a, b, c) => a + b + c)(1, 2, 3)

console.log(result)