// =======================================================
// MÓDULO 4: FINALIZAÇÃO E EXIBIÇÃO DO PEDIDO (Grupo 4)
// CÓDIGO DO GRUPO 4 VIRÁ AQUI
// =======================================================


if (itensPedidos.length > 0) {
  console.log("\nResumo do Pedido:");
  console.log(`\n${nomeCliente}, seu pedido está pronto:`);
  console.log(`Itens do Pedido: ${itensPedidos.join(", ")}`);
  console.log(`Total a pagar: R$ ${totalPagar.toFixed(2)}`); // Corrigido a variável
} else {
  console.log("Nenhum item foi pedido. Volte sempre!");
}
 
