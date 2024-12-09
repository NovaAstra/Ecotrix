/**
@name AnyArray
@description
A type that represents an array of any type. 

@template T The type of the elements in the array. Defaults to `any`.

@example
```ts
🔨 Array of numbers
type A = AnyArray<number>;
=> type A = number[]

💀 Array of strings
type B = AnyArray<string>;
=> type B = string[]

🔨 Array with elements of any type (default)
type C = AnyArray;
=> type C = any[]
```

@category Array
 */
export type AnyArray<T = any> = T[];


/**
@name Length
@description
A type that extracts the length of an array as a type.

@template T The type of the array.

@example
```ts
🔨 Length of a number array
type A = Length<[1, 2, 3]>;
=> type A = 3

💀 Length of an empty array
type B = Length<[]>;
=> type B = 0
```

@category Array
 */
export type Length<T extends AnyArray> =
    T extends { readonly length: infer L }
    ? L
    : never;


/**
@name Tail
@description
A type that extracts all elements of an array except for the first one. 
If the array is empty, it returns the array itself. 
If the array has only one element, it returns an empty array.

@template T The type of the array.

@example
```ts
🔨 Tail of a number array
type A = Tail<[1, 2, 3]>;
=> type A = [2, 3]

💀 Tail of a single-element array
type B = Tail<[1]>;
=> type B = []
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
@Last Head
@description
A type that extracts the first element of an array.
If the array is empty, it returns `never`.

@template T The type of the array.

@example
```ts
🔨 First element of a number array
type A = Head<[1, 2, 3]>;
=> type A = 1

💀 First element of an empty array
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
@name Last
@description
A type that extracts the last element of an array. 
If the array is empty, it returns `never`.

@template T The type of the array.

@example
```ts
🔨 Last element of a number array
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
@name Concat
@description
A type that combines two arrays into a single array, 
preserving the types of the elements in both arrays.

@template T1
@template T2

@example
```ts
🔨 Concatenating two arrays of numbers
type A = Concat<[1, 2], [3, 4]>;
=> type A = [1, 2, 3, 4]

💀 Concatenating a string array with a number array
type B = Concat<['apple'], [1]>;
=> type B = ['apple', 1]
```

@category Array
*/
export type Concat<
    T1 extends AnyArray,
    T2 extends AnyArray
> = [...T1, ...T2]


/**
@name Arrayable
@description
A type that allows a value to be either a single item or an array of items. 
This is perfect for situations where you want to accept both individual values 
and arrays without over-complicating your type definitions. 

@template T The type of the value(s).
  
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
@name ArrayValues
@description
Extracts the union type of the array elements from the array type `T`. 
It returns a type that represents all possible values contained in the array.

@template T The type of the array, which must extend `AnyArray`.

@example
```ts
import type {ArrayValues} from '@ecotrix/typox';

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