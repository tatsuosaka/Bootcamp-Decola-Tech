// Tipos primitivos

// Boolean

var vOuF = false;
console.log(typeof(vOuF));

// Number

var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// String

var nome = 'diana';
console.log(typeof(nome));

// Como declarar

var variavel = 'diana';
variavel = 'martine';
console.log(variavel);

let variavel2 = 'diana';
variavel2 = 'martine';
console.log(variavel2);

const constante = 'diana';
// constante = 'martine'; Vai dar erro por que não pode ser reatribuida
console.log(constante)

// Escopo

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal () {
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal();
// console.log(escopoLocalInterno); // Vai dar erro por ser uma variável let dentro de um bloco

// Atribuição

var atribuicao = 'diana';

// Comparação

var comparacao = '0' == 0;
console.log(comparacao);

// Comparação Idêntica

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// Operadores Aritméticos

// Adição

var adicao = 2 + 5;
console.log(adicao);

// Subtração

var subtracao = 2 - 5;
console.log(subtracao);

// Multiplicação

var multiplicacao = 2 * 5;
console.log(multiplicacao);

// Divisão Real

var divisaoReal = 2 / 5;
console.log(divisaoReal);

// Divisao Inteira

var divisaoInteira = 2 % 5;
console.log(divisaoInteira);

// Potenciação

var potenciacao = 2 ** 5;
console.log(potenciacao);

// Operadores relacionais

// Maior que

var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor que

var menorQue = 5 < 2;
console.log(menorQue);

// Maior ou igual a

var maiorIgual = 5 >= 2;
console.log(maiorIgual);

// Menor ou igual a

var menorIgual = 5 <= 2;
console.log(menorIgual);

// Operadores Lógicos

// E

var e = true && false;
console.log(e);

// OU

var ou = true || false;
console.log(ou);

// NÃO

var nao = !true;
console.log(nao);