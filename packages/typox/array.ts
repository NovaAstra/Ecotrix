export type AnyArray<T = any> = T[] | readonly T[]

export type Length<T extends AnyArray> =
    T extends { readonly length: infer L }
    ? L
    : never;

/**
The `Arrayable` type allows functions, methods, 
or data structures to accept either a single item 
or multiple items (an array) of the same type, providing 
flexibility and reducing the need for overloading or handling different types separately. 
 
@template T The type of the element(s).
  
@example
```ts
import type {Arrayable} from '@ecotrix/typox';

function demo<T>(input: Arrayable<T>) {
    const outputs = Array.isArray(input) ? input : [input];

    // …

    for (const output of outputs) {
        console.log(`write to: ${output}`);
    }
}

demo('A')
=> write to: A

demo(['A', 'B'])
=> write to: A
=> write to: B
```

@category Array
*/
export type Arrayable<T> = T | AnyArray<T>;

export type ArrayValues<T extends AnyArray> = T[number];

export type Tail<T extends AnyArray> =
    T extends readonly []
    ? T
    : T extends readonly [any?, ...infer L]
    ? L
    : T

export type Head<T extends AnyArray> =
    T["length"] extends 0
    ? never
    : T[0];

export type Last<T extends AnyArray> =
    T[Length<Tail<T>>]

export type Concat<
    T1 extends AnyArray,
    T2 extends AnyArray
> = [...T1, ...T2]