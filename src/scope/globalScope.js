var a; //Declarando
var b = 'b';//Declaramos/asigamos
b = 'bb';//reasignacion
var a = 'aa';//redeclaracion

//Global Scope

var fruit = 'apple'; //global
console.log(fruit);
function bestFruit() {
    console.log(fruit);
}

bestFruit()


function countries() {
    country = 'colombia'; // global
    console.log(country);
}

countries()
console.log(country);