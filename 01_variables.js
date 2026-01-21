const accountid="12345";
let accountname="Suyash Nigam";
var accountbalance=1000;
let acoounttype;
// accountid /// constant variable cannot change 

accountbalance=1500; // variable can change
accountname="Suyash N."; // let variable can change 

console.log(accountid);
console.log(accountname);
console.log(accountbalance);

 console.table({accountid,accountname,accountbalance,acoounttype});

 /* perfer not to use var  
 because of block scope issues and function scope issues */