//desestructuracion en arreglos
let frutas=["piña","fresa","naranjas","kiwi"];
console.log(frutas[2]);
console.log(frutas[3]);

let fruta1=frutas[0];
let fruta2=frutas[1];

//En unasola linea para cada item
let[fru1, fru2, fru3,fru4]=frutas;
// console.log(fru4);
// console.log(fru2);
// console.log(fru1);

//desestructuracion de objetos
let celular={
    pantalla:6.9,
    color:"negro",
    memoria:4,
    camara:12,
    marca:"Motorola",
    encender:function () {

        console.log("tururu");

    },
};
// tengo que saber que propiedades tiene el objeto - requisito
// let screen=celular.pantalla
// let {pantalla,encender,marca,memoria,color,camara}=celular;
let {pantalla,encender,marca,color}=celular;
// console.log(pantalla);
// encender();
// console.log(color);
// console.log(marca);


//que tengo una funcion que recibe las caracteristicas de una persona

// let verificarPersona=(nombre,dni,edad)=>{
//     console.log(nombre);
//     console.log(dni);
//     console.log(edad);
// }
// verificarPersona("Juan","9898989898",25);

//recibiendo arguemtnos por un objeto

let verificarPersona=({nombre,dni,edad})=>{
    console.log(nombre);
    console.log(dni);
    console.log(edad);
};
let persona={
    edad:21,
    nombre:"Maria",
    dni:"87878878",
    apellidos:"Galvez",
    hobbies:["comer","correr"],
};
verificarPersona(persona);