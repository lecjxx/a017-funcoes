//a) Uma função que receba 2 números faça a soma das duas entradas e imprima o resultado.

const somaEx = function (num01, num02) {
    return num01 + num02
} 
somaEx()

console.log(somaEx(2,2));

//b) Uma função que recebe 2 números e imprime um booleano que informa se o um número é **maior ou igual** ao outro.
/*
const x = prompt ("Digite o primeiro número")
const y = prompt ("Digite o segundo número")

function verificacao(x, y) {
    if (x>=y) {
        console.log(`${x} é maior ou igual que ${y}`);
    }else{
        console.log(`${x} não é maior que ${y}`);
    }
}

verificacao(x, y)
*/

//resolução

const x = prompt ("Digite o primeiro número")
const y = prompt ("Digite o segundo número")

function verificacao(x, y) {
    let booleano
    if (x>=y) {
        booleano = true
    }else{
        booleano = false
    }
    return booleano
}

console.log(verificacao(x, y))


//c) Uma função que receba um número e imprima se ele é par ou não

const z = prompt ("Digite um número")

function parImpar (z) {
    if (z % 2 === 0) {
    console.log(`O número ${z} é par`);
}else {
    console.log(`O númmero ${z} não é par`);
}
}
parImpar(z)

/*
d) Uma função que recebe  (`string`) e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas. */

const string = prompt("Digite algo").toUpperCase()

function caracteres (string) {
    for (let i = 0; i < string.length; i++) {
        console.log(`${string} possui ${string.length} caracteres`);
    }
}
caracteres(string)