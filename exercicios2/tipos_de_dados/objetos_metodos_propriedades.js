//Propriedades do objeto JavaScript

//Métodos de gerenciamento de propriedades

//1- JavaScript Object.defineProperty()
//Nesse metodo, estou definindo uma nova propriedade ao objeto pessoa. Bom frizar que so defini uma propriedade por vez

const pessoa = {
    fristName: "Matheus",
    lastName: "Zordan",
    age: 27
}
Object.defineProperty(pessoa, "year", { value: "1997" })
console.log(pessoa.year)

//2- Object.defineProperties
//Para definir mais de uma propriedade
Object.defineProperties(pessoa, {
    email: { value: 'matheuszordan97@gmail.com', enumerable: true },
    eyesColor: { value: 'blue', enumerable: true }
})
console.log(pessoa)

//3- Com essa memso metodo, podemos tambem alterar um valor de uma propriedade. Utilizando o objeto acima, vejamos como fazer:
Object.defineProperty(pessoa, "age", { value: "18" }) //alterando o valor da propriedade age de 27 para 18
console.log(pessoa.age)

//4- JavaScript getOwnPropertyNames()
//Esse metodo lista todas as propriedades do objeto. Bom frizar que ele lista os AS PROPRIEDADES QUE NAO SAO ENUMERAVEIS e as que são
Object.defineProperty(pessoa, "fristName", { enumerable: false })
console.log(Object.getOwnPropertyNames(pessoa))

//5- Javascript getOwnPropertyDescriptor()
console.log(Object.getOwnPropertyDescriptor(pessoa, 'fristName'))

//6- Javascript getOwnPropertyDescriptors()
console.log(Object.getOwnPropertyDescriptors(pessoa))

