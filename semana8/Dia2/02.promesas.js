// const hornearTorta =()=>{
//     //no sabemos como ira el horneado de nuestra torta
//     //y que eso demora en saber
//     return new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     let estado=false;
//     if (estado==true) {
//         //Aqui estoy forzando a que sea true o false
//         //comunmente tendriamos una operacion, buscar un registro
//         // obtener un elemento. obtener datos
//         resolve("La torta esta Ready!")
//     }else{
//          reject("Pos se quemo!")
//     }
// },5000);
//     });
// };
// hornearTorta()
// .then((tortahorneada)=>{
// console.log(tortahorneada);
// })
// .catch((tortaquemada)=>{
//     console.log(tortaquemada);
// })