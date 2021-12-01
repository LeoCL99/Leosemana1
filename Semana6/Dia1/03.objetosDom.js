// window.console.log("Hola");
//info del navegador
console.log(`Info navegador: ${window.navigator.userAgent}`);

//cual es mi url
console.log(`Url: ${window.location}`);
navigator.geolocation.getCurrentPosition(function (ubicacion) {
    console.log(ubicacion);
    
});
//Javascript a travez del objeto window
//window = pestaña del navegador
console.log(window.document);
let mititulo=document.querySelector("h1");
console.log(mititulo);
//innerHtml, es el contenido HTML de un elemento
mititulo.innerHTML="Hola Soy un nuevo Titulo";

//El html dentro de la etiqueta
console.log(mititulo.innerHTML);


//obtener un elemento
let micaja=document.getElementById("caja");
console.log(micaja);
//innerhtml representa el contenido html de un elemento
micaja.innerHTML="<h2>Titulo</h2>";


//background-color =backgroundcolor
micaja.style.backgroundColor="purple";
micaja.style.color="white";

let misItems = document.getElementsByClassName("lista_item");
console.log(misItems);
//Array.from(htmlColletion), crea un arreglo
let arregloItems=Array.from(misItems);

console.log(arregloItems);

arregloItems.forEach(function(item , indice, conjunto) {
    item.style.backgroundColor = "red";
    item.innerHTML=`Patata ${indice}`;
    console.log("mostrando el arreglo",conjunto);
});
//obtener element de diferentes maneras

//los queryselector u queryselectorall funcionan de la misma manera que los selectoresen css
let miTexto=document.querySelector("#texto");
console.log(miTexto);
//querySelector me da un nodelist
let boxes=document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach(function(bx) {
    bx.innerHTML=`<p>Soy un Párrafo</p>`;
    
});
console.log(boxes[0].innerHTML);

//crear elementos
let series=[
    "Squid game",
    "Pasion de Gavilanes",
    "Dark",
    "Billions",
    "Mr. Robot",
    "House of dragons",
    "chernoby1",
    "Breaking Bad"
]
let divContenido=document.getElementById("contenido");
//createelement("etiqueta"):"p","ul","h1","td"
let lista=document.createElement("ul");
//agregando ese elemento como hijo
//push a un elemento ya existente
divContenido.appendChild(lista);
let TextoLI="";
series.forEach(function (programaTv) {
    TextoLI=TextoLI + `<li>${programaTv}</li>`;
    
});
// console.log(TextoLI);
lista.innerHTML=TextoLI;

let imagen=document.createElement("img");
divContenido.appendChild(imagen);

//setAttribute("nombre_attr","valor_attr")
imagen.setAttribute("src","https://picsum.photos/200/300")

//clases de css
//a un elemento le podemos aplicar varias clases
lista.classList.add("resaltado");
lista.classList.add("redondeado");
lista.classList.remove("resaltado");