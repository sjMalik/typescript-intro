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

/**
 * Typescript know that the myName2 is string because the right hand side is a string assignment.
 * It has infered the type from the right hand side. As the right hand side has a specific types then the variables will be created with the specific type
 */
let myName2 = "Surajit";
let isCool2 = true;
let favNumber2 = 42;

// This is compile time error. Its not affecting the actual generated code thats going to be running for your application. 
// It generates the error at compile time when its turning typescript into javascript.
myName2 = 2; // Error: type number is not assignable to type string

function add3(a: number, b: number) {
    return a + b;
}

let result = add3(1, 2);
result = 'Sura';    // Error: type string is not assignable to type number

// Union Types

// Objects and Interfaces

// Optional Properties

// Classes

// Generics

// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck