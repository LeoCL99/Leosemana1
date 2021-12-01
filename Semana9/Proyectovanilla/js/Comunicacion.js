//se va a encargar de hacer peticiones
const URL="https://616b5eb816c3fa001717168a.mockapi.io/productos"
const obtenerProductos= async()=>{
try {
    //intenta esto
    //await , le deciamos aguanta, esto se tiene que resolver
   //respuesta del fetch, me da el status, 200, cabeceras del response, NO ME DA JSAON
    const respuesta= await fetch(URL)//solamente la URL, es un GET, respuesta de la petición
    const productos=await respuesta.json()//aquí hay otra promesa y esto me da el JSON convertido
    return productos;
} catch (error) {
    //y si fallas me pasas la voz
    throw error;
}
};

const crearProducto=async(objProducto)=>{
    try {
        //POST
        let configuracion={
            method:"POST",
            body: JSON.stringify(objProducto),//de obj de JSlec onvertiremos a JSON que es texto
            headers:{"Content-Type":"application/json"},//APIs epacomointerpretario
        };
        const respuesta=await fetch(URL, configuracion)
        const productoCreado=await respuesta.json();
        return productoCreado;
    } catch (error) {
        throw error;
    }
}
//este es el export
export {obtenerProductos,crearProducto };