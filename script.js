// Lista de empleados

const empleados = [
{ nombre:"Ana", horas:40, tarifa:15 },
{ nombre:"Luis", horas:35, tarifa:18 },
{ nombre:"Carlos", horas:20, tarifa:22 },
{ nombre:"Maria", horas:45, tarifa:16 },
{ nombre:"Sofia", horas:30, tarifa:20 }
];


// función para calcular pago

function calcularPago(horas, tarifa){
return horas * tarifa;
}


// botón

const boton = document.getElementById("btnCalcular");

boton.addEventListener("click", calcularNomina);


// función principal

function calcularNomina(){

let contenedor = document.getElementById("resultado");

contenedor.innerHTML = "";

let totalNomina = 0;

console.log("----- NÓMINA DEL MES -----");


// bucle for

for(let i = 0; i < empleados.length; i++){

let empleado = empleados[i];

let pago = calcularPago(empleado.horas, empleado.tarifa);

totalNomina += pago;


// MOSTRAR EN CONSOLA

console.log(empleado.nombre + " — Pago: $" + pago);


// MOSTRAR EN LA PÁGINA

contenedor.innerHTML += `
<div class="empleado">
👨‍💻 ${empleado.nombre} — Pago: $${pago}
</div>
`;

}

console.log("TOTAL PAGADO: $" + totalNomina);


// MOSTRAR TOTAL EN LA PÁGINA

contenedor.innerHTML += `<h3>Total pagado: $${totalNomina}</h3>`;

}