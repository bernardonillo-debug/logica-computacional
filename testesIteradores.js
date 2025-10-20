// Array com nomes fictícios de clientes
const clientes = ["Ana Souza", "Carlos Lima", "Fernanda Rocha", "João Mendes", "Beatriz Silva"];

// Loop for...of para percorrer o array e exibir mensagens
for (const nome of clientes) {
  console.log(`Enviando e-mail de agradecimento para ${nome}.`);
}


// Lista de clientes com data de compra
const compras = [
  { nome: "Ana", dataCompra: "2025-09-25" },
  { nome: "Bruno", dataCompra: "2025-10-10" },
  { nome: "Carla", dataCompra: "2025-08-30" },
  { nome: "Daniel", dataCompra: "2025-10-01" },
  { nome: "Eduarda", dataCompra: "2025-09-20" },
  { nome: "Felipe", dataCompra: "2025-10-15" },
  { nome: "Gabriela", dataCompra: "2025-09-28" },
  { nome: "Henrique", dataCompra: "2025-10-05" },
  { nome: "Isabela", dataCompra: "2025-09-10" },
  { nome: "João", dataCompra: "2025-10-18" }
];

// Data atual
const hoje = new Date();

// Função para verificar se a compra foi nos últimos 30 dias
function dentroDosUltimos30Dias(dataCompraStr) {
  const dataCompra = new Date(dataCompraStr);
  const diffEmMilissegundos = hoje - dataCompra;
  const dias = diffEmMilissegundos / (1000 * 60 * 60 * 24);
  return dias <= 30;
}

// Exibir clientes que compraram nos últimos 30 dias
console.log("📦 Clientes que compraram nos últimos 30 dias:");
compras.forEach((cliente) => {
  if (dentroDosUltimos30Dias(cliente.dataCompra)) {
    console.log(`- ${cliente.nome} (Compra em ${cliente.dataCompra})`);
  }
});



// Lista com nomes repetidos
const nomes = [
  "Ana", "Bruno", "Carla", "Ana", "Daniel", "Bruno", "Eduarda", "Felipe", "Carla", "Gabriela"
];

// Remover duplicatas usando Set
const nomesUnicos = new Set(nomes);

// Exibir nomes únicos com iterador
console.log("🧾 Nomes únicos na lista:");
for (const nome of nomesUnicos) {
  console.log(`- ${nome}`);
}
