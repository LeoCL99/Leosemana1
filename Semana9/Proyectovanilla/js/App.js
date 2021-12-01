/**
 * App.js mi JS principal
 * 1. Tener MockAPI Listo 
 * 2. Obtener los datos(GET) fetch
 * 3. convertir esos datos de HTML entendible por el navegador
 * ....
 * 4. Crear un Producto desde el navegador
 * 4.1 Detectar e l evento click de un boton
 * 4.2 vamos a abrir un modal de boostrap
 * 4.3 Obtener los datos del formulario que estara dentro del modal
 * 4.4 con esa info convertirla aun JSONyenviarla amockapi con un POST
 */
//importar

import { obtenerProductos,crearProducto } from "./Comunicacion.js";
import { imprimirProductos } from "./interfaz.js";
//variables globales - los elementos del DOM

let btnCrear=document.getElementById("btnCrear");
// let modalCrear=document.getElementById("modalCrear")
let modalCrear= new bootstrap.Modal(document.getElementById("modalCrear"));
let btnGuardar=document.getElementById("btnGuardar")
const getProductos=async()=>{
    try {
        let productosObtenidos= await obtenerProductos();//devuelve una promesa, por el await
        console.table(productosObtenidos);
        imprimirProductos(productosObtenidos);
    } catch (error) {
        console.log(error);
    }
}
getProductos();

//llamar al evento click de btnCrear
btnCrear.addEventListener("click",()=>{
    modalCrear.show();
})
btnGuardar.addEventListener("click", async()=>{
    let formulario=document.getElementById("formCrear");
    let nuevoProducto={
        nombre:formulario.nombre.value,//por el name="nombre" obtiene el value de cada input dentro del form
        descripcion:formulario.descripcion.value,
        precio:formulario.precio.value,
    };
    //utilizo la funcioncrear Producto de comunicacion y les paso el objeto
try {
    let productoCreado=await crearProducto(nuevoProducto);
    //EXITO CREANDO EL PRODUCTO
    formulario.reset();//Limpia los campos del formulario los input
    modalCrear.hide();//
    getProductos();
} catch (error) {
    console.log(error);
}
    
    // console.log(nuevoProducto);
    //POST
})