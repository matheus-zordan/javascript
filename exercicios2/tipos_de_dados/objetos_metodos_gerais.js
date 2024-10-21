//OBJETO
const pessoa = {
    nome: "Matheus",
    idade: 27,
    sexo: "M",
    profissao: "programador"
}
const pessoa2 = {
    nome: "Jose",
    idade: 60,
    sexo: "M",
    profissao: "Empresario"
}
console.log(pessoa)
console.log(pessoa2)


//FUNÇÃO CONSTRUTORA DE UM OBJETO
function Pessoa(nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
}
const pai = new Pessoa("José", 60, "Masculino")
const filho = new Pessoa("Matheus", 27, "Masculino")

//Métodos de objeto JavaScript
//1- JavaScript Object.assign()
//O método copia propriedades de um ou mais objetos de origem para um objeto de destino.Object.assign()

const person = {
    nome: "Matheus",
    idade: 27,
    sexo: "M",
    profissao: "programador"
}
const person2 = {
    nome: "",
    idade: "",
    sexo: "",
    profissao: ""
}
const person3 = {
    nome: "",
    idade: "",
    sexo: "",
    profissao: ""
}
Object.assign(person2, person)
Object.assign(person3, person)
console.log(person2)
console.log(person3)

//2- JavaScript Object.entries()
// Object.entries() Retorna uma matriz dos pares chave/valor em um objeto:

const text = Object.entries(person)
console.log(text)

//3- JavaScript Object.fromEntries()
// O método cria um objeto a partir de Uma lista de pares chave/valor.fromEntries()

const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];
const myObj = Object.fromEntries(fruits);
console.log(myObj)
const ex = Object.entries(fruits)
console.log(ex)

//4- JavaScript Object.values()
// Object.values() é semelhante, mas retorna uma única matriz de dimensão dos valores do objeto:Object.entries()
const person4 = {
    nome: "Matheus",
    idade: 27,
    sexo: "M",
    profissao: "programador"
}
let texto = Object.values(person);
console.log(texto)


// JavaScript Object.groupBy()
// ES2024 adicionou o método ao JavaScript.Object.groupBy()
// O método agrupa elementos de um objeto de acordo com os valores de string retornados de uma função de retorno de chamada.Object.groupBy()
// O método não altera o objeto original.Object.groupBy()

// const frutas = [
//     { name: "apples", quantity: 300 },
//     { name: "bananas", quantity: 500 },
//     { name: "oranges", quantity: 200 },
//     { name: "kiwi", quantity: 150 }
// ]

// function teste({ quantity }) {
//     if (quantity > 200) {
//         return "ok"
//     }
//     else {
//         return "low"
//     }
// }

// const resultado = Object.groupBy(frutas,teste)
// console.log(resultado)

// JavaScript Object.keys()
// O método retorna uma matriz com as chaves de um objeto.Object.keys()
const dados = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const keys = Object.keys(dados);
console.log(keys)

//Object.create()
// O método estático Object.create() cria um novo objeto, usando um objeto existente como o protótipo do objeto recém-criado
const carro = {
    marca:"honda",
    ano: 2017
}
//criando um novo objeto a partir de carro
const moto = Object.create(carro)
moto.marca = "suzuki"
moto.ano = 2017
moto.valor = 5000

console.log(carro)
console.log(moto)
