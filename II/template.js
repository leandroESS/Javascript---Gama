"Simara é"

let role = "tranformadora";

console.log(`simara é ${role}`); //interpolando

console.log('simara é' + " " +  role); // contatenando

//operador ternário aula 3 ------------------------------------------------------

/* if(idade>= 18){
    return "MAIOR DE IDADE"
}
else{
    return "Menor de idade"
} */

//idade >= 18 ? "maior de idade" : "Menor de idade"

function calculaIdade(age) {
    /* if(age>= 18){
        return "MAIOR DE IDADE"
    }
    else{
        return "Menor de idade"
    }*/

     return age >= 18 ? "maior de idade" : "Menor de idade";
} 

console.log(calculaIdade(7));

//Arrow Functions aula 4 -------------------------------------------

//função antes de 2015
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(3,5));

// com arrow function

const sum = (num3, num4) => num3 + num4; //com só tem uma linha, não precsa do {}, caso fosse > 1 sim precisaria

const sayHello = (nome) => ` hello ${nome}`;

console.log(sayHello('Leandro'));

//Arrays, Spread & Métodos ---  aula 05 ---------------------------------

const aluneGama = ["Paula","Maria", "João", "Margarida", "Gutto"];

console.log(aluneGama[0]); // Paula



// operador spread (espalha todos os itens do array)
const aluneXp = [...aluneGama,"Simara"];
console.log(aluneXp);

//métodos de interação
/* for(let i = 0; i < aluneXp.length; i++){
    console.log(aluneXp[i]); //laço para percorrer o array todo
} */

//map
aluneXp.map(aluna => console.log(aluna)); // que nem haskell aplica uma função em cada membro do vetor

//filter
const numeros = [34, 65, 44, 90, 87, 209, 3054, 1, 7, 0];

const resultado = numeros.filter(numero => numero > 100);
console.log(resultado);

const ordenaCrescente = numeros.sort((a,b) => a-b)
console.log(ordenaCrescente);

const ordenaDecrescente = numeros.sort((a,b) => b-a);
console.log(ordenaDecrescente);

//reduce : reduz o array a um resultado de uma operação matemática

const numbers = [1, 34, 35];
const soma1 = numbers.reduce((valorAnteior, valorAtual)=>{
    return valorAnteior + valorAtual;
},5)

console.log(soma1) // espera-se 75, pq? (1 + 34 + 35) + 5

// aula 06  Objetos Destructuring -----------------------------------------------------

const pessoa = { // lembra struct em C
    nome1 : "simara",
    idade: 23,
    cidade: "são paulo"
}
//Notação de ponto

console.log(pessoa.nome1);

//notação de conchetes

console.log(pessoa['idade']);

// Como desestruturar objetos

const {nome1, idade, cidade} = pessoa;
console.log(nome1); // não precisa do pessoas 
console.log(idade);
console.log(cidade);

//exemplo2 -- array de objetos
const filmes = [
    {
        titulo : "Pânico 1",
        ano : 1996,
        diretor: "wes craven",
        id: 1
    },

    {
        titulo : "O dia do Terror",
        ano : 2001,
        diretor: "David Navarro",
        id: 2
    },

    {
        titulo : "Morte vida severina",
        ano : 1976,
        diretor: "Olavo Bilac",
        id: 3
    },
]

const {titulo, ano, diretor, id} = filmes; // desestruturando o array de objetos
filmes.map(filme => console.log(filme.diretor)); // imprime todos os diretores

let test = function(){
    const name7;
    let fullName = name7 + "" santos"";
    console.log(fullName);
    }