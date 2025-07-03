// =======================================================
// MÓDULO 1: DEFINIÇÃO E ENTRADA DE PREÇOS (Grupo A e E)
// =======================================================
// Alunos: Maria Suellen, Maria Gabriele, Maria Clara, Naedia e Tayna

let PRECO_SANDUICHE;
let PRECO_PIZZA;
let PRECO_SUCO;

function obterPreco(item) {
  let preco;
  while (isNaN(preco) || preco <= 0) {
    preco = Number(prompt(`Qual o valor do ${item}?`));
    if (isNaN(preco) || preco <= 0) {
      alert("Valor inválido! Por favor, digite um número maior que zero.");
    }
  }
  return preco;
}

PRECO_SANDUICHE = obterPreco("sanduíche");
PRECO_PIZZA = obterPreco("fatia de pizza");
PRECO_SUCO = obterPreco("suco");


// =======================================================
// MÓDULO 2: ESTRUTURA DO PEDIDO E BOAS-VINDAS (Grupo B e F)
// =======================================================
// Alunos: Jhonatas, Antonio Saraiva, Josias Pajeu e José Wesley

let totalPagar = 0;
let itensPedidos = [];
let opcaoCliente = "";

alert("Bem-vindo à Lanchonete Comunitária!");
let nomeCliente = prompt("Qual seu nome?");

// =======================================================
// MÓDULO 3: LÓGICA DO MENU E SWITCH-CASE (Grupo C)
// =======================================================
// ALunos: Luis Carlos, José Gustavo, Gabriel Júlio, Ryan Jeferson e Samuel

while (true) {
  opcaoCliente = prompt(
    "menu da lanchonete comunitaria:\n" +
      "1. Sanduiche - R$7,00\n" +
      "2. Fatia de Pizza - R$8,00\n" +
      "3. Suco - R$2,00\n" +
      "0. para cancelar seu pedido"
  );
  if (opcaoCliente == "0") {
    break;
  }
  switch (opcaoCliente) {
    case "1":
      alert("voce escolheu o sanduiche - R$7,00");
      itensPedidos.push("Sanduiche");
      totalPagar += 7;
      break;

    case "2":
      alert("voce escolheu o fatia de pizza - R$8,00");
      itensPedidos.push("Fatia de Pizza");
      totalPagar += 8;
      break;

    case "3":
      alert("voce escolheu o suco - R$2,00");
      itensPedidos.push("Suco");
      totalPagar += 2;
      break;

    default:
      alert("Opçao ivalida e respoda so de 0 a 3");
      continue;
  }
}


// =======================================================
// MÓDULO 4: FINALIZAÇÃO E EXIBIÇÃO DO PEDIDO (Grupo D)
// =======================================================
// Miqueias, Pedro Lucas, Antonio Itálio e Gabriel Ribeiro

if (itensPedidos.length > 0) {
  console.log("\nResumo do Pedido:");
  console.log(`\n${nomeCliente}, seu pedido está pronto:`);
  console.log(`Itens do Pedido: ${itensPedidos.join(", ")}`);
  console.log(`Total a pagar: R$ ${totalPagar.toFixed(2)}`); // Corrigido a variável
} else {
  console.log("Nenhum item foi pedido. Volte sempre!");
}
