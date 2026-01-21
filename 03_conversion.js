let score = false;

console.log(typeof score); // number
console.log(typeof (score)); // number
// // both are same

let valueInNumber = Number(score); // convert string to number
console.log(typeof valueInNumber); // string)
console.log(valueInNumber); // 

// 33 => "33"
// true => "true"
// false => "false"
// null => "null"
// undefined => "undefined" 

let isLoggedIn = "suyash"; // 1 means true
let booleanIsLoggedIn = Boolean(isLoggedIn); 
console.log(booleanIsLoggedIn); // true


//1 => true
//0 => false
// "suyash" => true
// "" => false
// null => false
// undefined => false
// " " => true
// [] => true
// {} => true 


let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // "33" 
console.log(typeof stringNumber); // string
