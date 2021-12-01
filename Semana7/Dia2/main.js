//estamos creando un objeto Modal a partir de Bootstrap
//new boostrap.ObjetoDeBoostrap(referencia a un elemento HTML)
let miModal = new bootstrap.Modal(document.getElementById("miModal"));

console.log(miModal);


let btnAbrir=document.getElementById("btnAbrir");


setTimeout(function () {
    miModal.show();
}, 5000);