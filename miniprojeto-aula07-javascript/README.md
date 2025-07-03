# 🎮 Mini-Projeto: Jogo de Adivinhação de Palavras

Bem-vindos ao nosso desafio de programação em JavaScript! Neste mini-projeto, vamos construir juntos um divertido jogo de adivinhação de palavras, onde vocês terão um número limitado de tentativas para acertar a palavra secreta ou suas letras.

Este projeto foi desenhado para consolidar seus conhecimentos em:
* Variáveis e Tipos de Dados
* Estruturas de Repetição (`for`)
* Estruturas Condicionais (`if`, `else if`, `else`)
* Interação com o Usuário (`alert`, `prompt`)
* Manipulação de Strings

---

## 🎯 Objetivo do Jogo

O jogo escolherá uma palavra secreta e a esconderá com `_` (sublinhados). Você terá um número determinado de tentativas para:
1.  Adivinhar a palavra secreta completa.
2.  Chutar uma única letra e ver se ela está na palavra.

A cada acerto de letra, a palavra escondida será revelada parcialmente. Se você acertar a palavra ou completar todas as letras antes das tentativas acabarem, você ganha! Caso contrário, o jogo revela a palavra secreta.

---

## 🚀 Como Funciona o Código (Módulos Didáticos)

Para que vocês entendam como o jogo é construído em partes, dividimos o código em "Módulos Didáticos". Na aula, vamos discutir qual parte do jogo cada grupo é responsável por entender e explorar.

### **Módulo 1: Variáveis e Mensagens Iniciais**
* **O que faz:** Define a palavra secreta, o número total de tentativas e inicializa o estado do jogo. Também é responsável pelas mensagens de boas-vindas ao jogador.
* **Principais conceitos:** `const`, `let`, `alert()`, `String.repeat()`.

### **Módulo 2: Loop Principal do Jogo e Obtenção do Chute**
* **O que faz:** Controla o fluxo das tentativas do jogador. A cada nova tentativa, ele exibe o status atual do jogo e pede que o jogador digite uma letra ou a palavra completa. É onde a estrutura de repetição `for` principal atua.
* **Principais conceitos:** `for` (inicialização, condição, atualização), `prompt()`, `break`, `continue`, `toLowerCase()`, `trim()`.

### **Módulo 3: Lógica de Verificação do Chute**
* **O que faz:** É o "cérebro" do jogo. Ele verifica se o chute do jogador está correto (seja a palavra completa ou uma letra). Se for uma letra, ele percorre a palavra secreta (usando outro `for` loop aninhado) para revelar as letras corretas e dá feedback ao jogador.
* **Principais conceitos:** `if`/`else if`/`else`, operadores de comparação (`===`), `String.length`, `for` (aninhado).

### **Módulo 4: Mensagem de Finalização do Jogo**
* **O que faz:** Após todas as tentativas, este módulo verifica se o jogador conseguiu adivinhar a palavra. Ele exibe a mensagem final de vitória ou derrota, revelando a palavra secreta se o jogador não conseguiu acertar.
* **Principais conceitos:** `if`, operadores lógicos (`!`).

---

## 💻 Como Acessar e Trabalhar com o Código

Para este projeto, cada aluno irá trabalhar com sua própria cópia do código e entregar o link do seu projeto no Codepen.

1.  **Acesse o Código-Base:**
    * Clique no link abaixo para visualizar o código JavaScript completo do jogo (`index.js`):
        `[COLE AQUI O LINK DIRETO PARA O SEU ARQUIVO index.js NO GITHUB - ex: https://github.com/seu_usuario/LanchoneteComunitaria_Turma2/blob/main/index.js]`
2.  **Copie o Código:**
    * No GitHub, dentro do arquivo `index.js`, clique no botão `Raw` (bruto) ou selecione todo o texto e copie-o (`Ctrl+A` e `Ctrl+C`).
3.  **Abra seu Codepen:**
    * Vá para `https://codepen.io/` e faça login ou crie sua conta gratuita.
    * Clique em **"Create" > "New Pen"** para iniciar um novo projeto.
4.  **Cole o Código:**
    * Cole o código JavaScript que você copiou na seção **"JS"** do Codepen.
5.  **Configure o HTML (Básico):**
    * Na seção **"HTML"** do Codepen, você pode colocar um HTML básico para ter um título e um parágrafo de instruções:
        ```html
        <!DOCTYPE html>
        <html>
          <head>
            <title>Meu Jogo de Adivinhação</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1>Bem-vindo ao Jogo de Adivinhação!</h1>
            <p>Por favor, fique atento às janelas de interação (prompts e alertas) que aparecerão.</p>
            <p>O console do desenvolvedor (pressione F12) também pode mostrar mensagens.</p>
          </body>
        </html>
        ```
        * **Atenção:** O Codepen já executa o JS automaticamente, então você não precisa da tag `<script src="index.js"></script>` no HTML para o JS rodar.
6.  **Renomeie e Salve:**
    * No Codepen, clique em "Untitled" (sem título) no topo para **renomear seu projeto** (ex: `JogoAdivinhacao_SeuNome`).
    * Clique em **"Save"** (Salvar) no canto superior direito.
7.  **Obtenha o Link para Entrega:**
    * O link do seu projeto salvo estará na barra de endereços do navegador. **Copie este link!** Este é o link que você vai enviar no formulário.

---

## ❓ Dúvidas?

Qualquer dúvida durante o processo, não hesitem em perguntar ao professor ou aos colegas do grupo! Lembrem-se que a colaboração é fundamental para o aprendizado.

**Bom código e boa diversão!** 🎉
