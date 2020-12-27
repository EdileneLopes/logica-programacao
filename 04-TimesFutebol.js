/*
Um programa que mostre a diferença de gols e classifique em:
Empate, partida normal, goleada e algo incomum

*/


const readline = require('readline-sync')

const nomeTime1 = readline.question("Informe nome do time: ")
const nomeTime2 = readline.question("Informe o nome do outro time: ")
const golsTime1 = parseInt(readline.question(`Quantos gols o ${nomeTime1} fez: `))
const golsTime2 = parseInt(readline.question(`Quantos gols o ${nomeTime2} fez? `))
const diferencaGols = golsTime1 - golsTime2

if (diferencaGols < 0) {
  const diferencaGols = golsTime2 - golsTime1
}else if (diferencaGols == 0) {
      console.log('Empate...')
} else if (diferencaGols > 1 && diferencaGols <= 3) {
      console.log('Partida normal.')
} else if (diferencaGols >= 4 && diferencaGols <= 7) {
      console.log('Goleada!!')
}

console.log(diferencaGols)


