/**
 * 1,que datos necesito??
 * -la tarea(string), estado dla tarea(booleano)
 * -referencia del formulario
 * -referencia de la lista
 * 2, como obtengo los datos
 * -evento click, tomando el value del input
 */

let miform=document.getElementById("formtodo");


let ulTareas=document.getElementById("tareas");

let tareas=[];//aqui almacenaré las tareas a mostrar

//a, vamos a obtener el valor del input y agregarlo a las tareas[]

miform.addEventListener("submit",function (ev) {
    //evento
ev.preventDefault();
//formulario.nombre.value
let nuevaTarea=miform.tarea.value
console.log(nuevaTarea);
tareas.push(nuevaTarea);
console.log(tareas);
miform.reset();
dibujarTareas();
    
});
function dibujarTareas() {
    //cada vez que se ejecute
    ulTareas.innerHTML="";
    //se va encargar de dibujar las tareas
    tareas.forEach(function (item,posicion) {
        let li=document.createElement("li");
        li.innerText=item
        ulTareas.appendChild(li);
        //Agregar01 evento por cada item
        li.addEventListener("dblclick",function () {
            //la idea es que con esto nos permita eliminar una tarea
            // console.log("Click en Tarea");

            tareas.splice(posicion,1);
            // console.log("despues de eliminar",tareas);
            dibujarTareas();
        })
    });


};