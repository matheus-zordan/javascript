// Var
// Escopo: Funcional ou global. Isso significa que uma variável declarada com var pode ser acessada em qualquer lugar dentro da função em
// que foi declarada ou em qualquer lugar do código, se declarada fora de uma função.
// Hoisting: Variáveis var são "hoistadas" para o topo do seu escopo, o que significa que você pode usar a variável antes de declará-la.
// Redeclaração e reatribuição: Pode ser redeclarada e reatribuída dentro do seu escopo.

var nome = "Matheus"

function exibirDados() {
    console.log(nome)
    var sobrenome = "Zordan"
    console.log(sobrenome)
    var idade = 27
    console.log(idade)
}
exibirDados()

var calculo = (a, b) => a - b
console.log(calculo(10, 5))


//Let
// Escopo: De bloco. Uma variável let só pode ser acessada dentro do bloco em que foi declarada (por exemplo, dentro de um if, for ou função).
// Hoisting: Também é hoistada, mas não é inicializada. Tentar usar uma variável let antes de declará-la resultará em um erro de referência.
// Redeclaração: Não pode ser redeclarada dentro do mesmo escopo.
// Reatribuição: Pode ser reatribuída.

function exibiCor() {
    let cor = "azul";
    if (true) {
        let cor = "vermelho"; // Variável diferente da externa
        console.log(cor); // Saída: vermelho
    }
    console.log(cor); // Saída: azul
}
exibiCor()


let somatorio = (a, b) => a + b
console.log(somatorio(1, 1))

//Const
// Escopo: De bloco.
// Hoisting: Também é hoistada, mas não é inicializada.
// Redeclaração e reatribuição: Não pode ser nem redeclarada nem reatribuída.
// Inicialização obrigatória: Deve ser inicializada no momento da declaração.

const soma = (a, b) => a + b
console.log(soma(3, 4))

