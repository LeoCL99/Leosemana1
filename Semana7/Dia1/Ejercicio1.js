//Para esta parte usar if y for
/**
 * Eje1, crear una funcion que reciba un arrelgo y un nombre
 * del nombre existe dentro de la funcion retornar la posicion
 * del nombre emcontrado, en caso de no encontrarlo retornar -1
 * 
 * Tiempo aprox unos5 minutos
 */
 
/**
 * Como sabe la sunat si un ruc es Válido????
 * hay un digito verificador
 */
//Ejercicio RUC-Módulo 11
// function verificarRUC (ruc) {
//     //verificar que el ruc tenga 11 digitos
//     if (ruc.length== 11) {
//         //es correcto
//         //porque eventualmente en este bloque de codigo retornare un true
//         let factorChequeo=[5,4,3,2,7,6,5,4,3,2]
//         let total=0;
//         for (let i = 0; i < factorChequeo.length; i++) {
//             let prod= ruc[i]*factorChequeo[i];
//             //total=total+prod
//             total+=prod

//         }
//         let modulo=total%11;
//         let verificador=11-modulo;
//         if (verificar==ruc[10]) {
//             return true;
//         }
//     }
//     return false;
    
// }
// console.log(verificarRUC("206004184488")); 

//
// let pagoHora=25;
// let totalHoras=0;
// for(let i = 1; i <= 6; i++){
//     let cantDiaria=+prompt("Cuantas horas fueron hoy?");
//     totalHoras+=cantDiaria;
// }
// console.log(`El trabajador tiene ${totalHoras} horas trabajadas con un pago de ${totalHoras*pagoHora}`);


// let productos = [
//     {
//         nombre:"Audifonos",
//         clave:1,
//         materiaPrima:20
//     },
//     {
//         nombre:"Funda para movil",
//         clave:2,
//         materiaPrima:10
//     },
//     {
//         nombre:"USB",
//         clave:3,
//         materiaPrima:15
//     },
//     {
//         nombre:"Mouse Gamer",
//         clave:6,
//         materiaPrima:30
//     },
//     {
//         nombre:"Teclado",
//         clave:4,
//         materiaPrima:120
//     },
//     {
//         nombre:"Gráfica",
//         clave:5,
//         materiaPrima:200
//     }
// ]
// function calcularManoDeObra(clave,costoMP) {
//     if (clave==3 || clave==4) {
//         return costoMP*0.75;
//     }else if(clave==1 || clave==5){ 
//     return costoMP*0.8;
//     }else if(clave==2 || clave==6){
//         return costoMP*0.85;
//     }
   

// }
// function calcularCostoFabricacion(clave,costoMP) {
//     if (clave==3 || clave==4) {
//         return costoMP*0.3;
//     }else if(clave==1 || clave==5){ 
//     return costoMP*0.35;
//     }else if(clave==2 || clave==6){
//         return costoMP*0.28;
//     }
   

// }


// function calcularCostos(arrProductos) {
//     for (let i = 0; i < arrProductos.length; i++) {
//         //enfoquemonos en la mano de obra
//         let costoMP=arrProductos[i].materiaPrima;
//         let clave=arrProductos[i].clave;
//         let costoMO=calcularManoDeObra(clave,costoMP);
//         let costoCF=calcularCostoFabricacion(clave,costoMP);
//         let cProduccion=costoMP+costoMO+costoCF;
//         console.log(`El costo total de ${arrProductos[i].nombre} es S/${cProduccion}`);
//     }
    
// }
// calcularCostos(productos);

//////////////////////////////////////
let ventas=[
    {
        nombre:"televisor",
        precio:1200
    },
    {
        nombre:"radio",
        precio:400
    },
    {
        nombre:"smarphone",
        precio:1500
    },
    {
        nombre:"grafica",
        precio:1800
    },
    {
        nombre:"exprimidor",
        precio:100
    },
    {
        nombre:"tablet",
        precio:550
    },
    {
        nombre:"monitor",
        precio:600
    },
]
function calcularReporte(arrVentas) {
    //de 1000 a +
    //de 500 a 1000
    //de 500 a -
    //x cada una necesito saber el total
    //y aparte la suma de los totales
    let T1=0;
    let T2=0;
    let T3=0;
    for (let i = 0; i < arrVentas.length; i++) {
        if (arrVentas[i].precio>1000) {
            T1+=arrVentas[i].precio;
        }else if(arrVentas[i].precio>500){
           T2+=arrVentas[i].precio
        }else{//acá por descarte, cuesta menos de 500
            T3 +=arrVentas[i].precio;
        }
    }
    return{
        mayorAMIL:T1,
        mayorAQuinientos:T2,
        menoraQuinientos:T3,
        totalGlobal:T1+T2+T3,       
    };
}
console.log(calcularReporte(ventas));
let datos=calcularReporte(ventas);
let cuerpo=document.querySelector("body");
let p= document.createElement("p");
p.innerHTML=`El monto global es ${datos.totalGlobal}`;
cuerpo.appendChild(p);
p.style.border="1px solid red";