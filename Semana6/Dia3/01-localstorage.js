let nombre=prompt("Ingresa tu nombre");

localStorage.setItem("nombreUsuario",nombre);


// setTimeout(function () {
//  //leer contenido del localstorage
//  //.getitem("nombre_algo_guardado_en_el_Ls")
//     let obtenido=localStorage.getItem("nombreUsuario")
//     alert(obtenido);
    
// },4000);
// setTimeout(function () {
//     //eliminar algo
//     //removeItem("nombre_de_algo_guardado_en_el_LS")
//     localStorage.removeItem("nombreUsuario");

    
// },12000);
// //ejecuta algo en un intervalo, de forma periodica
// setInterval(function () {
//     console.log("Holaaaaa");

// },1000);

let numero=9;
localStorage.setItem("num",numero);
let numRecuperado=localStorage.getItem("num");
console.log(typeof numRecuperado, numRecuperado);
let objeto={
    modelo:"Iphone",
    pantalla:6.5,
    colores:["blanco","dorado","negro"],
    año:"2021",
};
let objAJSON=JSON.stringify(objeto);
console.log(objAJSON);
console.log(typeof objAJSON);
localStorage.setItem("objeto",objAJSON);
setTimeout(function () {
    let jsonObtenido=localStorage.getItem("objeto");
    //convertirlo de nuevo a un objeto de JS
    //.parse() recibeTexto y lo va a trasformar en JS
    let JsonRecuperado=JSON.parse(jsonObtenido);

    console.log(JsonRecuperado);
    
},4000);