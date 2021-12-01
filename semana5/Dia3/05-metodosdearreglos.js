let bebidas=["Agua","Limonada","Mojito","pisco sour"];
//elimina el ultimoe elemento de un arreglo
bebidas.pop();

console.table(bebidas);

//foreach
bebidas.forEach(function(mibebida) {
    //dentro de este foreach, me permite hacer por aca item lo que yo deseé
    console.log(mibebida);
})