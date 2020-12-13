/* algoritmo "SituacaoAluno"
// =============================================================
// Algoritmo para verificar se um aluno esta APROVADO ou REPROVADO
//
// AUTOR: Gustavo Guanabara
// Curso COMPLETO disponivel GRATIS no site www.cursoemvideo.com
// =============================================================
var */
const readline = require('readline-sync')

const nota1 = parseFloat(readline.question("Informe a primeira nota: "))
const nota2 = parseFloat(readline.question("Agora a segunda nota: "))
const media = (nota1 + nota2) /2

console.log('A média é: ', media)

if (media >= 7){
   console.log('Aluna aaprovada!')
}else if (media >= 5){
   console.log('Aluna em recuperação, se esforce mais.')
}else {
   console.log('Aluna reprovada :(')
}
 

