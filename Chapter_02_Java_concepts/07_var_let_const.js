// var, let, const
// var is function scoped, let and const are block scoped
var a=10; //global variable
function test() {
    console.log(a); 
}
//funtion means a reusable code that can call multiple times
//definition of function
//function printHello(){
//    console.log("Hello world 1");
//    var a=20; //local variable
//    console.log(a);
//    if(true){
//        var a=30;   
//        console.log(a);
//    }
//    console.log("F -> ",a);
//}
//calling of function
//printHello();

function printHello(){
    console.log("Hello world 2");
    let c=20; //local variable
    console.log(c);
    if(true){
        let c=3;   
        console.log(c);
    }
    console.log("F -> ",c);
}
//calling of function
printHello();

const pi=3.14; //constant variable
//pi=3.15; //error - cannot reassign a constant variable
console.log(pi);




// 1. Function Scope
function example() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 (accessible outside block)
}

// 2. Hoisting
console.log(age); // undefined (not ReferenceError)
var age = 25;
console.log(age); // 25

// Behind the scenes (hoisting):
var age1;
console.log(age1); // undefined
age1 = 25;

// 3. Redeclaration (allowed)
var name = "John";
var name = "Jane"; // No error
console.log(name); // "Jane"

// 4. Global Scope Issue
var count = 5;
if (true) {
    var count = 10; // Same variable!
}
console.log(count); // 10 (unexpected mutation)

// Classic var problem in loops
//for (var i = 0; i < 3; i++) {
//    setTimeout(() => console.log(i), 100);
//}
// Output: 3, 3, 3 (not 0, 1, 2)

//Problems with var:
//Creates confusion with scope
//Accidental global variables
//Hard to track variable mutations
//Loop counter issues

console.log("let - Block Scope (ES6)");
//Characteristics:
//Block-scoped { } (if, for, while, etc.)
//Hoisted but in "Temporal Dead Zone" (TDZ)
//Cannot be redeclared in same scope
//Can be updated
//Not initialized during hoisting

// 1. Block Scope
if (true) {
    let x = 10;
    console.log(x); // 10
}
// console.log(x); // ReferenceError: x is not defined

// 2. Temporal Dead Zone (TDZ)
//console.log(age2); // ReferenceError (not undefined)
//let age2 = 25; //Cannot access 'age2' before initialization

// 3. Cannot Redeclare
//let name2 = "John";
// let name2 = "Jane"; // SyntaxError: Identifier 'name2' has already been declared

// 4. Can Update
let score = 10;
score = 20; // ✅ Allowed
console.log("score:", score); // 20

// 5. Loop Counter Fix
//for (let i = 0; i < 3; i++) {
//    setTimeout(() => console.log("i:",i), 100);
//}
// Output: 0, 1, 2 (correct!)

// 6. Block Scope Example
let p = 10;
{
    let p = 20; // Different variable
    console.log("p inside block:", p); // 20
}
console.log("p outside block:", p); // 10

//When to Use let:
//Variables that will change
//Loop counters
//Temporary variables
//When you need block scope

console.log("const - Block Scope, Immutable Binding ");
//Characteristics:
//Block-scoped { }
//Hoisted but in TDZ
//Cannot be redeclared
//Cannot be reassigned
//Must be initialized during declaration
//Objects/Arrays content can be modified

// 1. Must Initialize
// const x; // SyntaxError: Missing initializer
const b = 10; // ✅ Correct

// 2. Cannot Reassign
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable

// 3. Block Scoped
const name3 = "John";
{
    const name3 = "Jane"; // Different variable
    console.log("name3 inside block -->",name3); // "Jane"
}
console.log("name3 outside block -->",name3); // "John"

// 4. Objects are Mutable (Reference is Constant)
const person = {
    name4: "John",
    age4: 30
};

person.age4 = 31; // ✅ Allowed (modifying content)
person.city = "NYC"; // ✅ Allowed (adding property)

// person = {}; // ❌ TypeError (reassigning reference)

// 5. Arrays are Mutable
const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed
numbers[0] = 10; // ✅ Allowed
console.log("numbers:",numbers); // [10, 2, 3, 4]

// numbers = []; // ❌ TypeError

// 6. Freezing Objects (True Immutability)
const config = Object.freeze({
    API_KEY: "abc123",
    URL: "https://api.example.com"
});

// config.API_KEY = "xyz"; // Silently fails in non-strict mode
// In strict mode: TypeError