let x;

const name = "Matheus";
const age = "27";

x = "Hello, my name is " + name + " and I am " + age + " years old";

x = `Hello my name is ${name} and i am ${age}`;

//Properties and Methods

const s = new String("Matheus");
x = s.length;

//Acess value by key

x = s[5];

x = s.toLocaleLowerCase();
x = s.toUpperCase();
x = s.charAt(6);
x = s.indexOf("M");
x = s.substring(0, 5);
x = s.substring(2);
x = s.slice(-2);

x = "             Matheus";
x = x.trim();

x = s.replace("Matheus", "Flamengo");
x = s.includes("theus");
console.log(x);
