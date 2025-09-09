//Exercício 2: Map
//Dado o array de strings const palavras = ["js", "html"], use o método map para criar um novo array onde todas as palavras estejam em maiúsculas, resultando em ["JS", "HTML"].

const palavras = ["js", "html"];
const upper = palavras.map(u => u.toUpperCase(palavras));
console.log(upper)