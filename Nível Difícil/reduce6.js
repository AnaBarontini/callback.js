//Usando o método reduce, agrupe os itens por categoria e some o preço total de cada categoria.

const itens = [
  { nome: "Caneta", categoria: "papel", preco: 3 },
  { nome: "Caderno", categoria: "papel", preco: 15 },
  { nome: "Banana", categoria: "alimento", preco: 2 },
];

const totalPorCategoria = itens.reduce((acc, it) => {
    const cat = it.categoria;
    if (!acc[cat]) acc[cat] = 0;
    acc[cat] += it.preco;
    return acc;
}, {})

console.log(totalPorCategoria)
