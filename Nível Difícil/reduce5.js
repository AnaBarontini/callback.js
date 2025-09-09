//Exercício 5: Reduce
//Calcule o preço total de todos os itens no array itens usando o método reduce.


const itens = [{ preco: 10 }, { preco: 20 }, { preco: 5 }];

const precoTotal = itens.reduce((acc, cur) => {
    return acc + cur.preco
}, 0);

console.log(precoTotal)