# Funções e suas particularidades

## Objetivos

1. O que são funções?
2. Como declarar funções
3. Funções com parâmetro

## O que são funções?

São blocos de comandos e instruções para a execução de determinadas tarefas:

Ex
```
    function nomeDaFuncao() {
        ${instrucao};
    }

    nomeDaFuncao();
```

## Como declarar?

Geralmente se utiliza a palavra reservada "**function**" seguida de parênteses "()" e chaves "{}":

Ex:
```
    function funcao() {
        console.log("mensagem");
    }

    funcao();
```
***() - Indica que é um objeto do tipo function***

***{} - Indica que é um bloco de instrução***

## Funções com parâmetros

As funções podem receber em sua declaração, parâmetros que servem como variáveis, onde sua atribuição pode ser feita durante a cahamda da função:

Ex:
```
    function nomeDaFuncao(parametro) {
        ${instrucao};
    }

    nomeDaFuncao(valorDoParametro);
```