// Type Annotations

/**
 * You have to specify the type of variable
 */
let myName: string = "Surajit";
let isCool: boolean = true;
let favNumber: number = 42;

// myName = 3; // Error: type number is not assignable to type string

function add(a,b) {
    return a + b;;
}

/**
 * This will not give you any error as we didnt mention any type here
 */
add(1, '2');

function add2(a: number, b: number) {
    return a + b;
}

// add2(1, '2'); // Error: Argument of type string is not assignable to parameter type number

// Inferred Types

// Union Types

// Objects and Interfaces

// Optional Properties

// Classes

// Generics

// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck