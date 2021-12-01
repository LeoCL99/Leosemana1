let divContenido=document.getElementById("contenido");
let miBoton=document.createElement("button");
miBoton.innerText="Clickeame";

divContenido.appendChild(miBoton);

//elementoHTML, addEvenlistener("event",funtion(){})
miBoton.addEventListener("click", function () {
    alert("haz hecho click!")
    
});

let Pelicula =[
  "parasite",
  "shang chi",
  "Interstellar",
  "Matriz",
  "el bueno, el malo, el feo",
  "geo tornamanta",
  "jhon wick",
  "constantine",
  "godfather",
  "el señor de los anillos",

];
Pelicula.forEach(function (peli) {
    let nuevoparrafo=document.createElement("p");
    nuevoparrafo.innerHTML=peli;
    divContenido.appendChild(nuevoparrafo);

nuevoparrafo.style.cursor="pointer";

    nuevoparrafo.addEventListener("dblclick",function () {
        alert(`Hiciste click en ${peli}`);
        nuevoparrafo.style.backgroundColor="steelblue";
        
    });
});

//
let miInput = document.createElement("input");
miInput.setAttribute("type","password");
divContenido.appendChild(miInput);

let btnVer=document.createElement("button");
btnVer.innerText="ver";
divContenido.appendChild(btnVer);


let esVisible=false;//flag

btnVer.addEventListener("click",function () {
    if (esVisible==false) {
        esVisible=!esVisible;
        miInput.setAttribute("type","text");
        esVisible=true;
    }else{
        miInput.setAttribute("type","password");
        esVisible=false;
    }
    
});
//Capturar Eventos

let iraGoogle=document.createElement("a");
iraGoogle.setAttribute("href","https://google.com");

iraGoogle.innerText="LLevame a Google";
divContenido.appendChild(iraGoogle);
//estilos de js
iraGoogle.style.textDecoration="none";
iraGoogle.target="blank";

///---------------
iraGoogle.addEventListener("click",function (evento) {
    evento.preventDefault();
    console.log(evento);
    
    
});
//capturar primero el formulario
let miformulario=document.getElementById("formulario");
//submit, es la acción de enviar datos
miformulario.addEventListener("submit",function (evento) {
    evento.preventDefault();
    console.log("submiiit!!!!!");
    //vamos a hcer envio de datos con javascript
    // console.log(miformulario.nombres.value);
    let nuevoUsuario ={
        //formulario, nombre_input.value
        mombres:miformulario.nombres.value,
        apellido:miformulario.apellidos.value,
    };
    console.log(nuevoUsuario);
});

