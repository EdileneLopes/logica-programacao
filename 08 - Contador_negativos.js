//programa que pede 5 números e verifica quais são negativos ou positivos
//e a soma deles

const query = require('synchronous-user-input');

let cont = 0
let totalNeg = 0
let totalPos = 0
let soma = 0

while(cont < 5){
    const num = query("Digite um número:  ")
    cont ++
    soma = num + soma
    if (num < 0){
        totalNeg ++
    }else {
        totalPos ++
    }
}
console.log(`Foram digitados ${totalNeg} valores negativos, e ${totalPos} valores positivos, e a soma deles é: ${soma}`)