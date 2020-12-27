//Exercício de tabuada

const { count } = require('console');
const query = require('synchronous-user-input');

const num = query("Quer ver a tabuada de que número? ")
let cont = 1

while(cont <= 10){
    console.log(num + ' X ' + cont + ' = ' +  (num * cont))
    cont ++
}

