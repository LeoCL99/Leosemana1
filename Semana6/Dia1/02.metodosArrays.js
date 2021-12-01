let frutas=["fresa","mango","piña","lucuma"];
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
    
// }
//recuerden los arreglos tambien son objetos
//Foreach(funcion(){})
frutas.forEach(function(fru) {
    console.log(fru);
    
});
//foreach pro cada elemento que encuentre vas a ejecutaruna funcion, y cada vez qye se ejecute esa funcion vas a recibir c/item en orden y este item lo podemos utilizar dentro de una funcion
let energia=[89,90,86,85,100];
//energia se va a dividir en 2
//como podria tener un nuevo arreglo con los valoresque representen la mitad de laenergia por cada item
// let energiacima=[]
// for (let i = 0; i < energia.length; i++) {
//   energiacima.push(energia[i]/2);
    
// }
// console.log(energiacima);
let energiacima=energia.map(function(energy) {
let energiatransformada=energy/2;
return energiatransformada;
// return energy/2;
    
});
console.log(energiacima);
console.log(energia);
//filter
let conductores=[
    {
        nombre:"Jóse",
        vacunado:true,
    },
    {
        nombre:"Glenda",
        vacunado:true,
    },
    {
        nombre:"Osmar",
        vacunado:false,
    },
];
let puedepasar=conductores.filter(function (driver) {
    return driver.vacunado==true;
    
});
console.log(puedepasar);

let dniDB=["42144143","12345678","76543210"];
let encontrado=dniDB.find(function (doc) {
    // return doc=="12345678";
    if (doc.includes("44")) {
        return doc;
    }
    
});
console.log(encontrado);