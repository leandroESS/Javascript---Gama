let resultado = fizzBuzz(9);
console.log(resultado);


function fizzBuzz(entrada) {

    if (typeof entrada !== 'number') { //caso não for um número
        return 'não é um número';
    }

    if ((entrada % 3 === 0) && (entrada % 5 == 0)) {
        return ("FizzBuzz");
    }

    if (entrada % 3 === 0) {
        console.log("Fizz");
    }

    if (entrada % 5 === 0) {
        console.log("Buzz");
    }

    return entrada;

}

// reverse string

let newString = '';
function reverseS(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
        console.log(newString);
    }
}

let resultado2 = reverseS('Hello Gama Academy');

//convertendo para Fahrenheit

function convetToFeha(value) {
     return value * 1.8 + 32;
    
}

let result = convetToFeha(1);
console.log(`O valor em fah.. é ${result}`);