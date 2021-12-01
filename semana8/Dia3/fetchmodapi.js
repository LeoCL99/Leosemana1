//obtener productos
const obtenerproductos=async()=>{
try {
    
        let rpta= await fetch("https://616b5eb816c3fa001717168a.mockapi.io/productos")
        let productos= rpta.json();
        console.log(productos);
        return productos
    }catch (error) {
        console.log(error);
} 
};


let body=document.querySelector("body");

obtenerproductos().then((misproductos)=>{
    let htmlproductos='';
    misproductos.forEach(prod => {
        htmlproductos=htmlproductos+`
        <tr>
        <td>${nombre}</td>
        </tr>
        <tr>
        <td>${prod.precio}</td>
        <tr/>`
    });
    body.innerHTML=`<table border="1">
    ${htmlproductos}
    </table>`;
}).catch(err => console.log(err))