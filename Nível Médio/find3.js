//Exercício 3: Find
//Dado o array de objetos usuarios, encontre e retorne o objeto do usuário que possui o id com o valor 3.

const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 3, nome: "Camila" },
  { id: 2, nome: "Bruna" },
];

const procuraUsuario = usuarios.find(u => u.id === 3)
console.log(procuraUsuario)