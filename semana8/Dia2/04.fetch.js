fetch("https://reqres.in/api/users?page=2")
.then((respuesta)=>{
console.log(respuesta);
return respuesta.json()//parsea de texto a JS
})
.then((gatos)=>{
    console.log(gatos);
})

//POST   - Crear
let nuevoUsuario={
    name:"Daniel de la Cruz",
    job:"BOSS"
}
//headers - cabeceras - guía de remisión
let cabecera={
    method:"POST",//Método HTTP, POST, DELETE, GET
    headers:{//que info envio. de que tipo, para que el backend separa como procesarlo
        'Content-Type':'application/json'
    },
    body:JSON.stringify(nuevoUsuario)//data, carga, pero hay que transformarlo a JSON
}
fetch("https://reqres.in/api/users", cabecera)
.then((respuesta)=>{
return respuesta.json()
})
.then((usuarioCreado)=>{
console.table(usuarioCreado);
})
.catch((error)=>{
    console.log(error);
})