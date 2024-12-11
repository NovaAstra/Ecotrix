import type { AnyArray, AnyFunction } from "@ecotrix/typox"

export function curry(fn: AnyFunction) {
    const curried: any = (..._args: AnyArray) =>
        _args.length >= fn.length
            ? fn(..._args)
            : curried.bind(null, ..._args);

    return curried;
}