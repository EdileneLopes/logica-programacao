/* algoritmo "AptoDirigir"
// =============================================================
// Algoritmo para verificar se uma pessoa ja pode tirar carteira de motorista
//
// AUTOR: Gustavo Guanabara
// Curso COMPLETO disponivel GRATIS no site www.cursoemvideo.com
// ============================================================= */

const readline = require('readline-sync')

const ano = readline.question("Qual ano atual ? ")
const nasc = readline.question("Qual o ano de nascimento? ")
const idade = (ano - nasc)

console.log('A idade é: ', idade)

if (idade >= 18) {
   console.log ('Apto a dirigir')
} else {
   console.log('Inapto a dirigir')
}

