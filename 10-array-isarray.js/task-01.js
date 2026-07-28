// Task 1: Check Different Data Types

let fruits = ["Apple", "Banana", "Mango"]; // Array
let age = 21;                              // Number
let name = "Aminul";                       // String
let student = {                            // Object
  id: 1,
  department: "CST"
};

console.log(Array.isArray(fruits));   // true
console.log(Array.isArray(age));      // false
console.log(Array.isArray(name));     // false
console.log(Array.isArray(student));  // false