// console.log("Hello World");

function returnEvenValues(array) {
    let evenNuns = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNuns.push(array[i]);
        }
    }
    console.log(evenNuns);
}

let array = [1, 2, 3, 4, 5, 6];

returnEvenValues(array);