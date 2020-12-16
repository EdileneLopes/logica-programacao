
const readline = require('readline-sync')

const nomeAluno = readline.question("Informe nome do aluno: ")
const nota1 = parseFloat(readline.question("Informe a primeira nota: "))
const nota2 = parseFloat(readline.question("Agora a segunda nota: "))
const media = (nota1 + nota2) /2
console.log(`A média de ${nomeAluno}, é ${media}`)

if(media >=9){
   console.log('Aproveitamento: A')
}else if (media >8 && media <= 9 ){
   console.log('Aproveitamento: B')
}else if (media <= 8 && media > 7){
   console.log('Aproveitamento: C')
}else if (media <= 7 && media > 6){
   console.log('Aproveitamento: D')
}else if (media <= 6 && media > 5){
   console.log('Aproveitamento: E')
}else{
   console.log('Aproveitamento: F')
}





