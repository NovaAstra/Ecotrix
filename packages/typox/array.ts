/**
@description
This type represents a mutable array where each element is of type `T`.
The default type for `T` is `any`, but you can specify it to create arrays of specific types.

@template T The generic type parameter for the elements of the array.

@example
```ts
const numbers: AnyArray<number> = [1, 2, 3];
numbers.push(4);

const fruits: AnyArray<string> = ['apple', 'banana'];
fruits.push('cherry');
```

@category Array
 */
export type AnyArray<T = any> = T[];


/**
@description
Extracts the length of the array type `T`. If `T` is a valid array, 
it returns the length as a type. Otherwise, it returns `never`.

@template T The type of the array, extending `AnyArray`.

@example
```ts
type A = Length<[1, 2, 3]>;
=> type A = 3
```

@category Array
 */
export type Length<T extends AnyArray> =
    T extends { readonly length: infer L }
    ? L
    : never;


/**
@description
Extracts the "tail" (all elements except the first) of an array type `T`.
If `T` is empty, returns `T`. If `T` is non-empty, 
returns the remaining elements as a new array type.

@template T The type of the array, extending `AnyArray`.

@example
```ts
🔨 Example with a non-empty mutable array
type A = Tail<[1, 2, 3]>;
=> type A = [2, 3]
```

@category Array
*/
export type Tail<T extends AnyArray> =
    T extends readonly []
    ? T
    : T extends readonly [any?, ...infer L]
    ? L
    : T


/**
@description
Extracts the first element of an array type `T`.
If `T` is empty, it returns `never`. Otherwise, 
it returns the type of the first element.

@template T The type of the array, extending `AnyArray`.

@example
```ts
🔨 Head of a non-empty array
type A = Head<[1, 2, 3]>;
=> type A = 1

💀 Head of an empty array
type B = Head<[]>;
=> type B = never
```

@category Array
*/
export type Head<T extends AnyArray> =
    T["length"] extends 0
    ? never
    : T[0];


/**
@description
Extracts the last element of an array type `T`.
It uses the `Tail` type to remove the first element and 
then accesses the last element of the resulting array.

@template T The type of the array, extending `AnyArray`.

@example
```ts
🔨 Last element of a non-empty array
type A = Last<[1, 2, 3]>;
=> type A = 3

💀 Last element of an empty array
type B = Last<[]>;
=> type B = never
```

@category Array
*/
export type Last<T extends AnyArray> =
    T["length"] extends 0
    ? never
    : T[Length<Tail<T>>]


/**
@description
oncatenates two arrays `T1` and `T2` into a single array type.
The result is an array containing all elements from `T1` followed by all elements from `T2`.

@template T1
@template T2

@example
```ts
🔨 Concatenate two arrays of numbers
type A = Concat<[1, 2], [3, 4]>;
=> type A = [1, 2, 3, 4]

💀 Concatenate a number array with a string array
type B = Concat<[1, 2], ['a', 'b']>;
=> type B = [1, 2, "a", "b"]
```

@category Array
*/
export type Concat<
    T1 extends AnyArray,
    T2 extends AnyArray
> = [...T1, ...T2]


/**
@description
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

/**
@description
Extracts the union type of the array elements from the array type `T`.
It returns the type of all values contained in the array.

@template T The type of the array, extending `AnyArray`.

@example
```ts
🔨 Array of numbers
type A = ArrayValues<[1, 2, 3]>;
=> type A = 3 | 1 | 2

💀 Array of strings
type B = ArrayValues<['apple', 'banana']>;
=> type B = "apple" | "banana"
```

@category Array
*/
export type ArrayValues<T extends AnyArray> = T[number];