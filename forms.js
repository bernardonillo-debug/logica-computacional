// Estruturas de dados
let listaNomes = [];
let conjuntoEmails = new Set();
let mapaTelefones = new Map();

// Cadastro de nomes (Array)
for (let i = 0; i < 10; i++) {
  let nome = prompt(`Digite o nome do cliente ${i + 1}:`);
  listaNomes.push(nome);
}

// Cadastro de e-mails (Set)
for (let i = 0; i < 10; i++) {
  let email = prompt(`Digite o e-mail do cliente ${i + 1}:`);
  conjuntoEmails.add(email);
}

// Cadastro de telefones (Map)
for (let i = 0; i < 10; i++) {
  let id = prompt(`Digite o ID do cliente ${i + 1}:`);
  let telefone = prompt(`Digite o telefone do cliente com ID ${id}:`);
  mapaTelefones.set(id, telefone);
}

// Exibição dos dados
console.log("\n📋 Lista de Nomes Cadastrados:");
listaNomes.forEach((nome, index) => {
  console.log(`${index + 1}. ${nome}`);
});

console.log("\n📧 Conjunto de E-mails Únicos:");
let emailIndex = 1;
conjuntoEmails.forEach((email) => {
  console.log(`${emailIndex++}. ${email}`);
});

console.log("\n📞 Mapa de Telefones por ID:");
mapaTelefones.forEach((telefone, id) => {
  console.log(`ID: ${id} → Telefone: ${telefone}`);
});
