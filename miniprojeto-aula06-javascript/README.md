# Projeto: Lanchonete Comunitária

Bem-vindos ao nosso projeto colaborativo de programação! Vamos construir um sistema de pedidos de lanchonete juntos!

## Regras Gerais:
- Trabalhem em equipe dentro do seu grupo.
- Usem o arquivo `.js` designado para o seu grupo.
- Conversem com os outros grupos, pois suas partes do código dependem umas das outras!
- Testem o código de vocês frequentemente.

---

## Módulos e Grupos:

### **Grupo 1: Módulo de Definição e Entrada de Preços**
**Arquivo para trabalhar:** `grupo1_modulo1.js`
**Objetivo:** Responsável por solicitar e armazenar os preços dos itens do menu no início do programa.
**Tarefas:**
- Crie as variáveis para `PRECO_SANDUICHE`, `PRECO_PIZZA` e `PRECO_SUCO`. Use `let` por enquanto.
- Use `prompt()` para perguntar ao usuário qual valor ele deseja para cada item.
- **Importante:** Converta a entrada do `prompt` para um número usando `Number()`.
- **Desafio Extra:** Adicione uma validação básica para garantir que o usuário digite apenas números positivos para os preços. Se não for um número válido, peça novamente.

### **Grupo 2: Módulo de Estrutura do Pedido e Boas-Vindas** - Concluído ✅
**Arquivo para trabalhar:** `grupo2_modulo2.js`
**Objetivo:** Gerenciar o fluxo principal do programa e a interação inicial com o cliente.
**Tarefas:**
- Crie as variáveis de controle: `let totalPagar = 0;`, `let itensPedidos = [];`, `let opcaoCliente = '';`.
- Implemente uma mensagem de boas-vindas usando `alert()`.
- Pergunte o nome do cliente usando `prompt()` e armazene em uma variável `let nomeCliente`.
- Crie a estrutura do loop `while` que controlará o menu de pedidos (lembre-se que ele deve continuar enquanto `opcaoCliente` não for `0`).

### **Grupo 3: Módulo de Lógica do Menu e Switch-Case**
**Arquivo para trabalhar:** `grupo3_modulo3.js`
**Objetivo:** Implementar a lógica de seleção de itens e atualização do pedido.
**Tarefas:**
- Dentro do loop `while` criado pelo Grupo 2, crie o `prompt()` que exibe o menu completo (sanduíche, pizza, suco e opção 0 para sair).
    - **Atenção:** Vocês precisarão das variáveis de preço criadas pelo Grupo 1.
- Implemente a estrutura `switch-case` para lidar com cada opção do menu (1, 2, 3 e 0).
- Para cada escolha de item (sanduíche, pizza, suco):
    - Exiba uma mensagem `alert()` confirmando a escolha.
    - Adicione o preço do item ao `totalPagar`.
    - Adicione o nome do item ao array `itensPedidos` (ex: `itensPedidos.push("Sanduíche");`).
- No `case 0`, mostre um `alert("Pedido Encerrado!");`.
- Adicione um `default` para tratar opções inválidas.

### **Grupo 4: Módulo de Finalização e Exibição do Pedido**
**Arquivo para trabalhar:** `grupo4_modulo4.js`
**Objetivo:** Mostrar o resumo do pedido ao cliente no final.
**Tarefas:**
- Após o loop `while` do pedido ter terminado, verifique se o array `itensPedidos` tem algum item (usando `if (itensPedidos.length > 0)`).
- Se houver itens, use `console.log()` para mostrar:
    - O nome do cliente.
    - A lista de "Itens do Pedido:" formatada de forma legível (dica: use `itensPedidos.join(", ")`).
    - O "Total a pagar:" formatado com duas casas decimais (dica: use `toFixed(2)`).
- Se não houver itens (o cliente saiu sem pedir nada), mostre uma mensagem como: `"Nenhum item foi pedido. Volte sempre!"` usando `console.log()`.

---

Bom trabalho a todos! Qualquer dúvida, procurem o professor.
