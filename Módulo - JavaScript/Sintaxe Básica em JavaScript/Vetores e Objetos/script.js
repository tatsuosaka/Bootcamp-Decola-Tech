// O que são vetores ou arrays

// Como declarar um array

let array1 = ['string', 1, true];
console.log(array1);

// O array pode guardar vários tipos de dados

let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array2[0]);

// forEach

array2.forEach(function(item, index){console.log(item, index)});

// push - adiciona item no final do array

array1.push('novo item');
console.log(array1);

// pop - remove item no final do array

array1.pop();
console.log(array1);

// shift - remove item no início do array

array1.shift();
console.log(array1);

// unshift - adiciona item no início do array

array1.unshift('novo item no inicio');
console.log(array1);

// indexOf - retorna o índice de um valor

console.log(array1.indexOf(true));

// slice - retorna uma parte de um array existente

let newArray = array1.slice(0, 3);
console.log(newArray);

// splice - remove ou substitui um item pelo índice

array1.splice(0 , 3);
console.log(array1);

// Objetos

let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: 'Objeto Interno'};

console.log(object.objectInterno);

// Desestruturação do objeto

var string = object.string;
console.log(string);

var arrayObj = object.array;
console.log(arrayObj);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);