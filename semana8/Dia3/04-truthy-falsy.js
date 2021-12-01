//comparaciones con JS
//== vs ===
//==solamente el valor
//=== compara el valor y el tipo de dato
if (1==="1") {
    console.log("son iguales");
}else{
    console.log("no son iguales");
}

//----------------------------------
//
//truthy - texto, numero, objeto, valor . son verdaderos
// let mequiere="regalo";
// let mequiere=89898989;
let mequiere={
    tipo:"regalo",
    categoria:"peluche",
};

if (mequiere) {
    console.log("Claro p");
}else{
console.log("T_T");
}