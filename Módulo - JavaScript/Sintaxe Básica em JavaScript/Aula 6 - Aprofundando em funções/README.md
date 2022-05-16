# Aprofundando em funções

## Objetivos

1. Tipos de funções
2. Funções aritméticas - Criando uma calculadora

## Tipos de funções

### Funções declarativas

São funções que possuem o uso mais comum, deve ser declarada usando a aplavra reservada "**function**" seguida do **nome da função**, parênteses "**()**" e chaves "**{}**"

Ex:
```
    function nomeDaFuncao() {
        ${instrucao};
    }
```
***O nome da função é obrigatório***

### Expressões de funções

São funções atribuídas à expressões. A nomeação das funções por expressão é opcional:

Ex:
```
    var funcao = function nomeDaFuncao() {
        ${instrucao};
    }
```
Ex:
```
    var funcao = function() {
        ${instrucao};
    }
```

### Arrow Function

São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas. Deve ser declarada com parênteses "**()**", seguido de "**=>**" e depois chaves "**()**"

Ex:
```
    var funcao = () => {
        ${instrucao};
    }
```

## Funções aritméticas

### Criando uma calculadora

Para este exercício vamos utilizar alguns métodos nativos do JavaScript:

- Number() - Para converter valores em números
- Prompt() - Para registrar entradas de usuário
- Alert() - Para mostrar mensagem ao usuário
- TemplateStrings - Para usar strings junto com expressões