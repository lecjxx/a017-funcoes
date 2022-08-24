/*Crie 4 funções, cada uma deve receber dois numeros e retornar o valor uma das operações básicas 
(soma, subtração, multiplicação e divisão).*/

console.log("===_-_-RESOLUÇÃO-_-_===");

const x = Number (prompt ("Digite o primeiro número"))
const y = Number (prompt ("Digite o segundo número"))

function operacao(x,y) {
console.log(`
${x} + ${y} = ${x + y} 
${x} - ${y} = ${x - y} 
${x} x ${y} = ${x * y} 
${x} / ${y} = ${x / y} `)
}
operacao(x,y)

console.log("===_-_-ARROW FUNCTION-_-_===");

const a = Number (prompt ("Digite o primeiro número"))
const b = Number (prompt ("Digite o segundo número"))

let op = (a, b) => {
    console.log(`
    ${a} + ${b} = ${a + b} 
    ${a} - ${b} = ${a - b} 
    ${a} x ${b} = ${a * b} 
    ${a} / ${b} = ${a / b} `)
    }
    op(a, b)

/*
//soma
const soma = function (num01, num02) {
    return num01 + num02
}
//guarde o retorno em uma variável e imprima 
soma()

console.log(soma(2,2));

//subtração
const subtracao = function (num01, num02) {
    return num01 - num02
}
//guarde o retorno em uma variável e imprima 
subtracao()

console.log(subtracao(2,2));

//multiplicação
const multiplicação = function (num01, num02) {
    return num01 * num02
}
//guarde o retorno em uma variável e imprima 
multiplicação()

console.log(soma(2,2));

//divisao
const divisao = function (num01, num02) {
    return num01 / num02
}
//guarde o retorno em uma variável e imprima 
divisao()

console.log(divisao(2,2));
*/