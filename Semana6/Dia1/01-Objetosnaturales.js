//objeto date nos sirve para manejar fechas
let hoy=new Date()
//clases(class),plano , diseño, molde
//cuando invocamos una clase utilizaremos la palabra new
console.log(hoy);
//año
console.log(hoy.getFullYear());
//mes, Enero es 0 y diciembre es 11
console.log(hoy.getMonth());
//dia
console.log(hoy.getDay());

let navidad = new Date(2021,11,25);
console.log(navidad);
//gettime() me devuelve el timestamp de navidad
console.log(navidad.getTime()); 

let hastanavidad =navidad - hoy;
console.log(hastanavidad);
let diasparanavidad=hastanavidad/1000/60/60/24;
console.log(diasparanavidad.toFixed(2));
console.log(navidad.toDateString());
//Math
console.log(Math.sqrt(144));
//potencia
console.log(Math.pow(5,30));
//Aleatorio
console.log(Math.random());
function aleatorio(min, max) {
    let resultado =Math.random()*(max-min)+min;
    return resultado;
    
}
console.log(aleatorio(5,50));

//for aleatorios
for (let i = 0; i < 5; i++) {
    console.log(aleatorio(5,50).toFixed(1));
    
}