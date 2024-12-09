/**
This type is useful when you want to allow a variable to 
hold a value of a specific type or be explicitly empty 
(i.e., `null` or `undefined`).
 
@template T The base type that the value can take when it is not `null` or `undefined`.
  
@example
```ts
import type {Nullable} from '@ecotrix/typox';

🔨 A value that can either be a string, null, or undefined
const name: Nullable<string> = "John";
const age: Nullable<number> = null;
const address: Nullable<string> = undefined;

💀 A function that accepts nullable values
function demo(name: Nullable<string>) {
    if (name) {
        console.log(`write to: ${name}`)
    } else {
        console.log("Name is not provided");
    }
}

demo('A');
=> write to: A

demo(null);
=> Name is not provided

demo(undefined);
=> Name is not provided
```

@category Union
*/
export type Nullable<T> = T | undefined | null