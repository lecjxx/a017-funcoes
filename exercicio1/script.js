//# Exercício 1

//a) Declare uma função que imprima `Olá, [SEU NOME]!`. 

function saudacao(nome) {
    console.log(`Olá ${nome}`);
}
saudacao("Letícia")


console.log("====__arrow functions__====");

let nome = (n) => console.log(`Olá ${n}`);
nome("Letícia")

//b) Declare uma função que imprima a tabuada do 6. 
/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function tabuada(array) {
    const num01 = 6
    const num02 = numeros[i]
    const novoArray = [num01*num02]

    novoArray.push(num01,num02)
    return novoArray
}
//retorne um novo arrays com o primeiro e ultimo número
console.log(tabuada (numeros));
*/

//Resolção 

function tabuada() {
    for (let i = 0; i < 11; i++) {
        console.log(`${i} x 6 = ${i*6}`);
        
    }
}
tabuada()

console.log("====__arrow functions__====");

let tabu = (num) => { for (let i = 0; i < 11; i++){
    console.log(`${i} x 6 = ${i*6}`);
}
}
tabu()

//c) Comente as funções criadas acima, 
//e reescreva-as utilizando expressões de função,
// ou __arrow functions__
