// Estruturas condicionais

// IF

/*
 if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
}
*/

// ELSE

/*
if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
} else {
    console.log('Ninguem marcou ponto');
}
*/

// ELSE IF

/*
if(jogador1 > 0) {
    console.log('jogador1 marcou ponto');
} else if (jogador2 > 0) {
    console.log('jogador2 marcou ponto');
} else {
    console.log('Ninguem marcou ponto');
}
*/

// NINHO DE IF

/*
if (jogador1 = -1) {
        if(jogador1 > 0) {
            console.log('jogador1 marcou ponto');
        } else if (jogador2 > 0) {
            console.log('jogador2 marcou ponto');
        } else {
            console.log('Ninguem marcou ponto');
    }
}
*/

// IF TERNÁRIO

/*
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') : console.log('Jogadores Invalidos');
    if(jogador1 > 0) {
        console.log('jogador1 marcou ponto');
    } else if (jogador2 > 0) {
        console.log('jogador2 marcou ponto');
    } else {
        console.log('Ninguem marcou ponto');
}
*/

var jogador1 = 1;
var jogador2 = 0;
var placar;


jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') : console.log('Jogadores Invalidos');

// Usando if

    if(jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador 1 marcou ponto');
        placar = jogador1 > jogador2;
    }
    
// Usando else if

    else if (jogador2 > 0 && jogaodor1 == 0) {
        console.log('Jogador 2 marcou ponto');
        placar = jogador2 > jogador1;
    } 
    
// Usando else
    
    else {
        console.log('Ninguem marcou ponto');
}

console.log('\n');

console.log("SWITCH/CASE\n") // SWITCH/CASE

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou')
}

//Estruturas de repetição

let array = ['valor1','valor2','valor3','valor4','valor5',];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}

console.log('\n');

console.log("FOR\n") // FOR - Executa uma instruçãoa até que ela seja falsa

for(let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

console.log('\n');

console.log("FOR/IN\n") // FOR/IN - Executa uma repetição a partir de uma propriedade

// Com array

for (let i in array) {
    console.log(i);
}

// Com object

for (i in object) {
    console.log(i)
}

console.log('\n');

console.log("FOR/OF\n") // FOR/OF - Executa uma repetição a partir do valor

// Com array

for (i of array) {
    console.log(i);
}

// Com object

for (i of object.propriedade1) {
    console.log(i);
}

console.log('\n');

console.log("WHILE\n") // WHILE

var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

console.log('\n');

console.log('DO/WHILE\n') // DO/WHILE

var b = 0;

do {
    b++;
    console.log(b);
} while (b < 10);