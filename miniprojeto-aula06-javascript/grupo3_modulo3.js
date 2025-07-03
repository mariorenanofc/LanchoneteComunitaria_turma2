// =======================================================
// MÓDULO 3: LÓGICA DO MENU E SWITCH-CASE (Grupo 3)
// CÓDIGO DO GRUPO 3 VIRÁ AQUI
// =======================================================

while (true) {
  opçãoCliente = prompt("menu da lanchonete comunitaria:\n" + "1. Sanduiche - R$7,00\n" + "2. Fatia de Pizza - R$8,00\n" + "3. Suco - R$2,00\n" + "0. para cancelar seu pedido");
if (opçãoCliente == "0") {
  break;
}
switch (opçãoCliente) {
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
