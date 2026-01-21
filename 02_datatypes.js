"use strict"; // treat all js code like a modern js //
// Datatypes in JavaScript //

// 1. Primitive Datatypes : number, string, boolean, undefined, null, symbol, bigint
// 2. Non-Primitive Datatypes : objects, arrays, functions

// Primitive Datatypes //

const myname = "Suyash Nigam"; // string datatype
const myage = 21; // number datatype
const isstudent = true; // boolean datatype
console.log(typeof myname); // to know the datatype of variable
console.log(typeof myage);
console.log(typeof isstudent);

console.log(typeof  undefined  ); // string
console.log(typeof  null  ); // object

let myvariable; // undefined datatype
console.log(typeof myvariable);

myvariable = null; // null datatype
console.log(typeof myvariable); // object (this is a bug in js, typeof null should be null)

console.table({ myname, myage, isstudent, myvariable });
console.table({ myname: typeof myname, myage: typeof myage, isstudent: typeof isstudent, myvariable: typeof myvariable });