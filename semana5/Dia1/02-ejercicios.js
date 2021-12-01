//1.  Pedir al usuario sus nombres, apellidos y edad cada unopor separador, el resultado deberia ser un console.log, resumiendo los datos de usuario.
 //let nombre = prompt("Cual es tu nombre ");

 //let apellido = prompt("cual es tu apellido;");

 //let edad= prompt("cual es edad?");
 //console.log(`Bienvenido: ${nombre} ${apellido} de  ${edad} años de edad`);
 //Alet, es una ventana con u nmensaje
//alert(`Bienvenido: ${nombre} ${apellido} de  ${edad} años de edad`);

//a) Que datos necesito???
//b) como puedo tener esos datos
//c) Esos datos están en la forma que necesito???

//let base=+prompt("Cual es la base del triangulo");

//let altura=+prompt("Cual es la altura del triángulo");

let base=prompt("Cual es la base del triangulo");

let altura=prompt("Cual es la altura del triángulo");

let basenumero = parseFloat(base);
let alturanumero = parseFloat(altura);

//let c=base * altura /2;

let resultado=(basenumero * alturanumero)/2;
console.log(resultado);

//3. preguntar al usuario por dos números y mostrar el Residuo de la devicion{}

let num =+prompt("Ingresa A");
let numb = +prompt("Ingresa B");
console.log(`el residuo de los numeros es: ${num % numb} `)


