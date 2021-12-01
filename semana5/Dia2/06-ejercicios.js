/**
 * Una Bodega quiere hacer un inventario de sus productos.
 * Actualmente vende 03 productos, gaseosa, leche , galleta
 * 
 * queremos saber por cada tipo de producto, cuantos tiene en existencia
 * 
 * eso si, sabemos el total de productos pero no su cantidad correspondiente a cada tipo
 */


/**
 * Descomposición
 * 
 * manejamos 03 productos
 * dice que sabemos el total de todo pero no por tipo
 * tendremos que preguntar producto por producto
 */

/**
 * a)que datos necesito?
 * total de gaseosa + leche + galleta
 * contar por tipo
 * b) de donde obtengo los datos?
 * se los pregunto al usuario, prompt1
 * c) estan de la forma que necesito?
 * necesito contar 1x1, number
 */

let cantProducto=+prompt("Cuantos productos en total tienes?");
let gaseosa=0;
let leche=0;
let galletas=0;

//patron, voy a preguntaruna y otra vez
for (let i = 0; i < cantProducto; i++) {
    let producto=+prompt("Ingrese 1.Gaseosa 2.Leche 3.Galleta ");

    switch(producto){
        case 1:
            gaseosa=gaseosa+1;
        break;
        case 2:
            leche++;
        break;
        case 3:
            galletas++;
         break;    
         default:
             alert("Numero Erroneo")
             i--
    }
    
}
console.log(`En total hay: 
Gaseosa: ${gaseosa}
leche: ${leche}
galletas: ${galletas}`);