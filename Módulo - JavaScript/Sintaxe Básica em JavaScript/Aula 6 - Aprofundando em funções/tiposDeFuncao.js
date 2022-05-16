// Tipos de função

// Declarativas

function funcao1() {
    console.log('Tudo certo!')
}

funcao1();

// Expressão de função

// Com nomeação

var funcao2 = function funcao2() {
    console.log('Sou uma função expressão')
}

funcao2()

// Sem nomeação

var funcao3 = function() {
    console.log('Sou uma função expressão')
}

funcao3()

// Arrow Function

var funcao4 = () => {
    console.log('Sou uma Arrow Function');
}

funcao4();