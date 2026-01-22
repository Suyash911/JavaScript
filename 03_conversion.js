// let score = false;

// console.log(typeof score); // number
// console.log(typeof (score)); // number
// // // both are same

// let valueInNumber = Number(score); // convert string to number
// console.log(typeof valueInNumber); // string)
// console.log(valueInNumber); // 

// // 33 => "33"
// // true => "true"
// // false => "false"
// // null => "null"
// // undefined => "undefined" 

// let isLoggedIn = "suyash"; // 1 means true
// let booleanIsLoggedIn = Boolean(isLoggedIn); 
// console.log(booleanIsLoggedIn); // true


// //1 => true
// //0 => false
// // "suyash" => true
// // "" => false
// // null => false
// // undefined => false
// // " " => true
// // [] => true
// // {} => true 


// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber); // "33" 
// console.log(typeof stringNumber); // string




// /***************** Operations *******************/ 


// let firstName = "Suyash ";
// let lastName = "Nigam";
// let fullName = firstName + lastName; // concatenation
// console.log(fullName); // Suyash Nigam 


// let num1 = 7;
// let num2 = 4;

// console.log("Addition: " + (num1 + num2)); // 11
// console.log("Subtraction: " + (num1 - num2)); // 3
// console.log("Multiplication: " + (num1 * num2)); // 28
// console.log("Division: " + (num1 / num2)); // 1.75
// console.log("Modulus: " + (num1 % num2)); // 3
// console.log("Exponentiation: " + (num1 ** num2)); // 2401



// // /********** Hoisting in JavaScript **********/
// console.log(x);
// var x = 10;   // Works (undefined)

// Clousure in JavaScript
// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// // Asynchronous JavaScript
// setTimeout(() => {
//   console.log("After 2 seconds");
// }, 2000);
// // Stack and Heap Memory

// let Fname = "Suyash";
// let NewName = Fname ; // Copy by Value
// NewName = "Nigam";

// console.log(NewName);

let person = {
  name: "Suyash",
  age: 21,
};
 console.log(person);

    let newPerson = person;
    newPerson.name = "Nigam"; // Copy by Reference
    newPerson.age = 22;

console.log(newPerson.age);
console.log(person.age);



// /********** End **********/


/// Strings in JavaScript //

const myname = "Suyash Nigam";
const greeting = `Hello, I am ${myname}. Nice to meet you!`;
console.log(greeting); // Hello, I am Suyash Nigam. Nice to meet you!

const gameName = new String('Football')

console.log(gameName.length); // 8
console.log(gameName[0]); // F
console.log(gameName.toUpperCase()); // FOOTBALL
console.log(gameName.toLowerCase()); // football
console.log(gameName.includes('ball')); // true
console.log(gameName.startsWith('Foot')); // true
console.log(gameName.endsWith('ball')); // true
console.log(gameName.indexOf('o')); // 1
console.log(gameName.lastIndexOf('o')); // 6
console.log(gameName.slice(0, 4)); // Foot
console.log(gameName.replace('Foot', 'Basket')); // Basketball
console.log(gameName.trim()); // 'Football' (removes whitespace from both ends)
console.log(gameName.split('')); // [ 'F', 'o', 'o', 't', 'b', 'a', 'l', 'l' ]  
console.log(gameName.charAt(2)); // o
console.log(gameName.charCodeAt(2)); // 111 (ASCII code of 'o')

// /********** End **********/

const newString = gameName.substring(0,5);
console.log(newString); // Foot

const anotherString = gameName.slice(-2,6);
console.log(anotherString); // otba


const newStringOne = "   Suyash Nigam   ";
console.log(newStringOne);