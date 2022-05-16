# Entendendo variáveis e seus valores

## Objetivos

1. Como funciona a tipagem em JS?
2. O que são variáveis e como declarar
3. Diferenças entre atribuição, comparação e comparação idêntica
4. Operadores aritméticos, relacionais e lógicos

## Como funciona a tipagem em JS

A tipagem funciona como uma regra de uso de dados, quanto mais forte for a tipagem, mais obrigatório é a declaração do tipo de dado.

A tipagem em **JavaScript** é fraca, a declaração dos dados acontece de modo dinâmico.

Ex: Ao criarmos uma variável com valor entre aspas("valor") o **JavaScript** já converte o dado para o tipo String.

Ex: var numero = 1;
/ o **JavaScript** já converte o valor 1 para o tipo Number.

## Declaração de variáveis

### Tipos primitivos

As variáveis em **JavaScript** podem guardar tipos de dados que chamamos de tipos primitivos

Variáveis podem guardar valores do tipos: Boolean, null, undefined, Number, String, Array, Object, Function.

### O que são variáveis?

Imagine uma caixa onde você pode colocar quase qualquer coisa dentro, pode ser uma lista de nomes, cartões com numeros, objetos no geral.

Variáveis funcionam dessa forma, como uma caixa que guarda valores.

### Declaração de variáveis

Existem 3 modos de declarar as variáveis em **JavaScript**

- **var** - escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratado como null.

- **let** - escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratado como null.

- **const** - escopo local de bloco, somente leitura, o valor inical é obrigatório e não pode ser alterado.

### Escopo

O escopo em **JavaScript** define a limitação e visibilidade de um bloco de código.

- **Escopo global** - quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

- **Escopo local** - quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

## Diferenças entre atribuição comparação e comparação idêntica

### Atribuição

O sinal de igualdade "=" em **JavaScript**, significa atribuição.

Ex:
- Como declarar: `var nome = "meu nome";`
- Como ler: _variável nome recebe o valor meunome;_

### Comparação

Para fazermos uma comparação de valores em **JavaScript** usamos "=="

Ex:
- Como declarar: `"0" == 0;`
- Como ler: _"0" tem o valor igual a 0?_
- (Nesse caso retorna True)

### Comparação Idêntica

Para fazermos uma comparação de valores e tipos em **JavaScript** usamos "==="

Ex:
- Como declarar: `"0" === 0;`
- Como ler: _"0" tem o valor e o tipo idêntico a 0?
- (Nesse caso retorna false)

## Operadores aritméticos, relacionais e lógicos

### Operadores aritméticos

São tipos de operadores matemáticos com valor numérico:

- Adição +
- Subtração -
- Multiplicação *
- Divisão real /
- Divisão Inteira %
- Potenciação **

### Operadores relacionais

São tipos de operadores que consultam a relação entre valores:

- Maior que >
- Menor que <
- Maior ou igual a >=
- Menor ou igual a <=

### Operadores lógicos

São tipos de operadores que consultam valores lógicos:

- Considera que todos os valores sejam true && "e"
- Considera que qualquer valor seja true || "ou"
- Inverte o valor de true para false ou vice-versa ! "não"