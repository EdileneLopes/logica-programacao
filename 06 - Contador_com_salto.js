//um programa de contar, com salto(pulando um valor)
//readline sync está dando erro no windows, usei synchronous

const query = require('synchronous-user-input');


const valor = query("Quer contar até quanto? ")
const salto = query("Qual será o valor do salto? ")
let cont =  0

while(cont < valor){
    console.log(cont)
    cont = cont + salto
    
}
console.log('Terminei de contar') 
