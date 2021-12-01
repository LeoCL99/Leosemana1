 let edad = +prompt("Cual es tu edad");
// //if(condicion)
// if (edad>=18) {
//     console.log("si accedes a la primera dosis")
// }else if(edad>=0){
//     console.log("Noup, aún falta");
// }
// else{
//     console.log("Error al ingresar datos")
// 
if (edad>=65) {
    console.log("Te toca Pfizer y te toca yaaaaa");
    //y = &&
}else if (edad<=55 && edad>=45) {
    console.log("Te toca Pfizer y te toca el finde ");
    //o = || uno tiene que ser verdad
}else if (edad ==18 || edad==21) {
    console.log("Te toca sinopharn mañana");
}else{
    console.log("Anda a yapongoelhombro.com")
}