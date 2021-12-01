/*
*for(contador; condicional; actualizacion_contador){
    codigo que se ca a repetir
}
 */ 
//i++
//i= i + 1;
// for(let i=0; i<=16; i=i+1){
//     console.log(`El contador es : ${i}`);
// }
// console.log("Yo estoy en la final!!!!")

// let ropa=["bufanda","camisa","guantes","jeans"]
// //length = longitud, es la cant items en un arreglo
// for(let i=0; i<ropa.length; i++){
//     console.log(ropa[i])
// }

let carta =["ceviche","pollo a ala brasa","costillar","adobo","caldo de gallina"];
let eleccion=+prompt("0. ceviche, 1.pollo, costillar, 3.adobo , 4.caldo de gallina");

for(let i=0; i< carta.length;i++){
    if (eleccion == i) {
        console.log(`Usted a elegido: ${carta[i]}`)
    }
}