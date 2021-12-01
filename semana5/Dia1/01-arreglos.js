//para declarar arreglos, necesitamos ponerlos entre[]
//desde el primer elemento se cuenta desde 0, 1, 2...
//ese número se conoce como posición, indice o index
let nombres = ["masami","oscar","mauro","melissa","frank"];
//si deseo referenciar un elemntonecesito su posicion
//nombre-arreglo[#]
console.log(nombres[4]);
console.log(`los nombres de mis alumn@sson ${nombres[0]},${nombres[1]},${nombres[2]}`);
console.log(nombres);

//longitud es la cantidad de elementos
console.log(nombres.length);//number
let cofre = ["gato",1000,true];
console.log(cofre);
//agregar items
cofre.push("perro");
console.log("cofre actualizado",cofre);