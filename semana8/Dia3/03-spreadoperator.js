//spread - esparcir

let frutas= ["kiwi","sandia","fresa","chirimoya"];

//un nuevo arreglo pero con el contenido de otro....arreglo
let frutastmp=[...frutas,"Mango","Uvas"];

console.log(frutastmp);

let verduras=["Lechuga","Col china","Zanahoria"];
let comida=[...frutas,...verduras]

// console.log("comida",comida);

//spread operator en objetos

let pikachu={
    tipo:"electrico",
    ataque:"40",
    vida:"55",
    ataque:"cabezaso",
};
//no hagan eso
// let pikachurojo=pikachu

// //pikachurojo se peleo
// pikachurojo.vida=23;
// console.table(pikachurojo);
// console.log("pikachu original");
// console.table(pikachu);
let pikachuverde={...pikachu,ataque:"conversar",come:"Lechuga"};
pikachuverde.vida=40;

console.log("///pikachu original///");
console.table(pikachu);
console.log("///pikachu verde//");
console.table(pikachuverde);
