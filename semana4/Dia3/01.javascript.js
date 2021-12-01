//console.log permite mostrar en la consola de JS, lo que se nos antoje es muy util para saber que esta pasando internamente dentro de JS
console.log("Hola Mundo!");

//Variables
//Palabras reservadas, JS las usa
//los nombres de varibles son sensibles a mayus y minus
var nombre="Osmar";

console.log(nombre);//solamente para mostrar algo
//Tipos de datos -Texto, Números, Booleanos,
//String -Texto -Cadena de texto
var nombre2="LEO";

//Number -número
var edad = 31;
console.log(edad);

//Boolean -Booleano
var esDeNoche = true; // True ó False
console.log(esDeNoche);

//para ver el tipo de dato
console.log(typeof esDeNoche);

//Para cambiar de valor a una variable, me basta con llamarla
edad=25;
console.log(edad);
nombre = "Leonardo";
console.log(nombre);

//Cambiar de tipo de dato

var anio = 2021;
anio = "dos mil veintidos"
console.log(anio);
//JS es un lenguaje que no es tipado, no pre declaramos los tipos de datos

//Valores raros en variables
var nota;

console.log(nota);

var nulo = null;

console.log(nulo);

//Not a number = NaN
var rareza = 100 / "cebollas";

console.logo(rareza);

//infinito

var infinito = 100 / 0 ;

console.log(infinito);