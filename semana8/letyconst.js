
for (var i =0 ;i<5; i++){ 
     console.log(j);
}
//console.log(`iterador J ${j}`);//esto da error
//RESUMEN NO USEN VAR, AL MENOS UN LET

//cuando son const que tienen valores, se tiene la convemcion de poner el nomnre en MAYÚSCULA
const PI=3.1415;

//PI=40; //no podemos cambiar un cariable creada con const
console.log("mostrando pi", PI);

//una variable puede referenciar casi a cualquiera cosa
//number,string,booleans, arrays, objetos y funciones

let saludar=function () {
    console.log("Hola!!");
    
};
saludar();
const despedirme=function () {
    console.log("Chau!");
    
};
despedirme();
//si una variable que almacene lo que sea no va a cambiar
//UTILICEN CONST