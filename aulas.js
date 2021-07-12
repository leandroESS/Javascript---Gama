console.log("Hello world");

var myName;
console.log(myName);
myName = "Leandro";
console.log(myName);

let language = "Javascript";

const pattern = "ecmascript"

{
    var age = 32 //number
    let age2 = 34
}

console.log(age); // roda pois var é variavél global
//console.log(age2); --> não vai rodar, pois let nao é reconhecido fora do bloco

//const myLastName; --> dará erro , pois precisa ser inicializada
const myLastName2 = "leandro"; //String
//const myLastName2 = 'Leo'; --> não pega, pois ja inicializou uma vez

var isCool = true; // boolean

//objeto, array e função

var person = { // objeto
    "name": "simara",
    "age": 32
}

var Student = ["Leo", "Fernanado", "Miguel"]; // array

function sum(a, b) { //function
    return a + b
}

//operador typeof

console.log(typeof 32); // retorna o tipo do elemento

// operadores aritméticos -aula 4-

var soma = 3 + 200;
console.log(soma);






var sub = 3 - 200;
console.log(sub);

var multi = 3 * 200;
console.log(multi);

var div = 250 / 3;
console.log(div);

var rest = 100 % 3;
console.log(rest);

rest++;
console.log(rest);

console.log(div--);

var x = 3;
var y = 7;
console.log(x += y);

//condicionais aula 5

var num = 1;

if (num === 1) {
    console.log("num é igual a 1");
}
else {
    console.log("não é 1");
}

var num2 = 0;

if (num === 0) {
    console.log("num é igual a 0");
}
else if (num === 2) {
    console.log("num é igual a 2");
}
else {
    console.log("num é 1");
}

//switch case

var mes = "janeiro";

switch (mes) {
    case 'fevereiro':
        console.log("mes 2");
        break;
    case 'março':
        console.log("mes 3");
        break;
    case 'janeiro':
        console.log("mes 1");
        break;
    default:
        console.log("nenhum dos casos");

}


//estrutura de repetição - aula 6

var colors = ["azul", "vermelho", "verde", "preto"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

for (i = 0; i < 10; i++) {
    console.log(i);
}

i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

//funções -aula7

function sayHello() {
    console.log("Hello");
}

function sayHello2(name) {
    console.log("Hello " + name);
}

function sayHello3(name, secoundName) {
    console.log("Hello " + name + ' ' + secoundName);
}

function sum7(a, b) {
    return a + b;
}

sayHello();
sayHello2("leandro");
sayHello3("leandro", "aNDRADE");
sum7(2, 2);

//aula 8 , classes

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;

    }

    read() {
        return `estou lendo ${this.title}`

    }
}

let book = new Book('algortimos e estrutura de dados', 'Brian', 133);
let book2 = new Book('algortimos :Introdução ', 'Zuritte', 286);

console.log(book);
console.log(book.read());

console.log(book2);
//console.log(book, book); -> outra possibilidade

class ITBook extends Book { //herança de Book
    constructor(title, author, pages, technology) {
        super(title, author, pages);
        this.technology = technology;
    }

}

let iTBook = new ITBook('algortimos e estrutura de dados', 'Brian', 133, 'algoritmos');

console.log(iTBook);
console.log(iTBook.title);

class People {
    constructor(nameC) {
        this._nameC = nameC;

    }

   get nameC() {
       return this._nameC;
   }

   set nameC(value){
       this._nameC = value;
   }


}

let people = new People('Leandro');

//console.log(people.name) // não pega pois está em capsulado , por isso o uso de sets e gets

people.nameC = 'andrade';
console.log(people.nameC);



