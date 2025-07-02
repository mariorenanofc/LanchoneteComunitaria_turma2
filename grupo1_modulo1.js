// =======================================================
// MÓDULO 1: DEFINIÇÃO E ENTRADA DE PREÇOS (Grupo 1)
// CÓDIGO DO GRUPO 1 VIRÁ AQUI
// =======================================================



let PRECO_SANDUICHE;
let PRECO_PIZZA;
let PRECO_SUCO;

function obterPreco(item) {
    let preco;
   while(isNaN(preco) || preco <= 0) {
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
