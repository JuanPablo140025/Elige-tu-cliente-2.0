// lista de productos

const productos = [

{nombre:"Teclado", precio:50, cantidad:3},

{nombre:"Mouse", precio:25, cantidad:5},

{nombre:"Monitor", precio:200, cantidad:2},

{nombre:"Audifonos", precio:80, cantidad:4},

{nombre:"Webcam", precio:60, cantidad:1}

];



// función que calcula venta

function calcularVenta(precio, cantidad){

return precio * cantidad;

}



// botón

const boton = document.getElementById("btnVentas");

boton.addEventListener("click", generarReporte);



// función principal

function generarReporte(){

let contenedor = document.getElementById("resultado");

contenedor.innerHTML = "";

let totalVentas = 0;

console.log("----- REPORTE DE VENTAS -----");



// bucle for

for(let i = 0; i < productos.length; i++){

let producto = productos[i];

let total = calcularVenta(producto.precio, producto.cantidad);

totalVentas += total;



// consola

console.log(producto.nombre + " — $" + total);



// página

contenedor.innerHTML +=

`<div class="producto">

${producto.nombre} — $${total}

</div>`;

}

console.log("TOTAL VENDIDO: $" + totalVentas);



contenedor.innerHTML +=

`<h3>Total vendido: $${totalVentas}</h3>`;

}