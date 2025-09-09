//Exercício 4: Map + Filter
//Dado um array de objetos produtos com as propriedades nome e preco, crie um novo array contendo apenas os nomes dos produtos que custam mais de 20.

const produtos = [
  { nome: "Pulseira", preco: 10 },
  { nome: "Colar", preco: 30 },
];

const nomesProdutosCaros = produtos
    .filter(p => p.preco > 20)
    .map(p => p.nome);

console.log(nomesProdutosCaros)
