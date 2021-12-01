let a = 1;
let b = 2;
console.log(a+ b);

let nombre = "Leonardo ";
let apellido = "Condure";
 console.log(nombre + apellido);

 //TEMPLATE STRING / TEMPLATE LITERAL
 //Backticks
 //${aca adentro, podemos poner codigo de JS}
 //ALT + 96 =`
 let texto=`Hola soy ${nombre} ${apellido} y soy de Aqui`;
 console.log(texto);
 //PROMP, CAPTURAR DATOS, DEL USUARIO

 let cantidaddeMascotas = prompt(`Hola ${nombre}, Cuantas mascotas tienes?`);
 console.log(`Mascotas : ${cantidaddeMascotas}`);

 console.log(typeof cantidaddeMascotas);//todo lo ingresado en un prompt es string
// Parseint, parse = interpretador, convierte de texto a número
 //let convertir = +cantidaddeMascotas;
 let convertir = parseFloat(cantidaddeMascotas);
 //let convertir= parseInt(cantidaddeMascotas);
 console.log(typeof convertir, convertir);