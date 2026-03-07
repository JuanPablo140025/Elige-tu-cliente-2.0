// Lista de empleados
const empleados = [
  { nombre: "Ana", horas: 40, tarifa: 15 },
  { nombre: "Luis", horas: 35, tarifa: 18 },
  { nombre: "Carlos", horas: 20, tarifa: 22 },
  { nombre: "María", horas: 45, tarifa: 16 },
  { nombre: "Sofía", horas: 30, tarifa: 20 }
];

// Función para calcular el pago
function calcularPago(horas, tarifa) {
  return horas * tarifa;
}

// Acumulador
let totalNomina = 0;

console.log("📋 Generando nómina...");

// Bucle for
for (let i = 0; i < empleados.length; i++) {
  let pago = calcularPago(empleados[i].horas, empleados[i].tarifa);
  totalNomina += pago;

  console.log(
    empleados[i].nombre + " cobra $" + pago
  );
}

console.log("💰 Total a pagar: $" + totalNomina);