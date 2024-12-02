// Ways to declare a variable
// var, let, const
let firstName = "Matheus";
let lastName = "Zordan";

console.log(firstName, lastName);

var age = 27;

console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

//Re-assigning Variables

age = 31;
console.log(age);

let score;
score = 1;

console.log(score);

if (true) {
  score = score + 1;
}
console.log(score);

const x = 100;

const arr = [1, 2, 3];

arr.push(4);

console.log(arr);

const person = {
  name: "Matheus",
};

person.name = "Zeca";
person.age = 60;

console.log(person);
//Declare multiple values at once

let a, b, c;

const d = 10,
  e = 5,
  f = 8;
