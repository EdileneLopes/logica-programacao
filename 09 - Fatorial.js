//programa que escreve o fatorial de um número

/* algoritmo "Fatorial"
// =============================================================
// Algoritmo para calcular o Fatorial de um numero.
// Ex: 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

const query = require('synchronous-user-input')

let n = query('Digite um número para ver o fatorial: ')

/* function fatorialRec(n) {
    if (n == 0) return 1
    if (n == 1) return 1
    return  n * fatorialRec(n-1)
}

console.log(fatorialRec(n)) */

cont = n
fat = 1

while(cont > 0){
    console.log(cont + ' x')
    fat *= cont
    cont--
}

console.log(fat)