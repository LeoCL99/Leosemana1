let hornearTorta=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (true) {
                resolve("Torta ready")
            }else{
                reject("se quemo");
            }
        },5000);
    });
};
let prepararGlaseado=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Glaseado Listo!!");//va a ser exitoso
            //reject("se quemo el microndas")
            // reject("se quemo el microndas")
        },3000);
    });
};
let cubrirTorta=()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
resolve("Torta Decorada");
// reject("Pide Rappi noma");

        },4000);
    });
};

//comencemos por la primera torta a ejecutar
hornearTorta()
.then((tortaHorneada)=>{//good, exito, resolve
    console.log(tortaHorneada);
//tuvimos exito con la torta, entonces vamos por la sgte.
//retornar otra promesa
return prepararGlaseado()
})
.then((glaseadoListo)=>{//este then es de prepararGlaceado
console.log(glaseadoListo);
return cubrirTorta();

})
.then((tortaDecorada)=>{//este then es de cubrir torta
console.log(tortaDecorada);
})
.catch((tortaMal)=>{//funciones para todoas las promesas que esten detrás
    console.log(tortaMal);

})