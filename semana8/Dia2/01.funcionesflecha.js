// function saludar(nombre) {
//     return `Hola soy ${nombre}`
    
// }
const despedida=function (mensaje) {
    return `Bye, ${mensaje}`;
    
};

//Función Flecha
// const saludar =(nombre)=>{
//     return `Hola soy ${nombre}`
// };

//si solo tengo 01 argumento para recibir
const saludar =(nombre)=>{
    return `Hola soy ${nombre}`
};

//si es algo sencillo directamente puedo indicar en la misma linea
//lo que se va a retornar
//const saludar=nombre=>`Hola soy${nombre}`;

console.log(saludar("Daniel")); 
console.log(despedida("cuidate ")); 


let Mouse={
    nombre:"Miguelito",
    roer:function () {
        
    
        console.log(`${this.nombre} roe queso`);
    },
};
Mouse.roer();
