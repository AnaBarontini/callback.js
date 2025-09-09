//Exercício 1: Filter
//Dado o array const arr = [10, 15, 20, 25, 30], use o método filter para obter um novo array contendo apenas os números maiores ou iguais a 20.

const arr = [10, 15, 20, 25, 30];
const maiores = arr.filter(m => m >= 20);
console.log(maiores)