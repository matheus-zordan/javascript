//TIPOS DE DADOS
// JavaScript tem 8 tipos de dados
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

//STRING
//As stings sao escritas em aspas, podendo ser simples ou dupla

const nomePai = "José Cosme Zordan"
const nomeMae = 'Ana Rita Vitor de Assis Zordan'
console.log(nomePai, nomeMae)

//NUMBER
//Todos os números JavaScript são armazenados como números decimais (ponto flutuante).Os números podem ser escritos com ou sem decimais:
const number = 34.00
const numberTwo = 34
console.log(number, numberTwo)

// Notação exponencial
// Números extra grandes ou extra pequenos podem ser escritos com científico Notação (exponencial):
const y = 123e-5
console.log(y)

// JavaScript BigInt
// Todos os números JavaScript são armazenados em um Formato de ponto flutuante de 64 bits.A
// JavaScript BigInt é um novo tipo de dados (ES2020) que pode ser usado para armazenar 
//valores inteiros que são muito grandes para serem representados por um número JavaScript normal.
const x = BigInt('132412412421421412515234124124213634643')
console.log(x)

// JavaScript Booleanos
// Os booleanos só podem ter dois valores:true ou false
const a = 5;
const b = 5;
console.log(a == b)
