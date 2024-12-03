//Values are store on the stack
const name = "Jhon";
const age = 27;

//References values are store on the heap
const person = {
  name: "matheus",
  age: 50,
};

let newName = name;
newName = "Zeca";

let newPerson = person;
newPerson.name = "Ana";

console.log(name, newName);
console.log(person, newPerson);
