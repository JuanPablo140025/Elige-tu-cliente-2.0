// ===============================
// StartupPay — Payroll Engine 💸
// ===============================

// Base de datos simulada (freelancers)
const freelancers = [
  { nombre: "Ana", horas: 40, tarifa: 15 },
  { nombre: "Luis", horas: 35, tarifa: 18 },
  { nombre: "Carlos", horas: 20, tarifa: 22 },
  { nombre: "María", horas: 45, tarifa: 16 },
  { nombre: "Sofía", horas: 30, tarifa: 20 }
];

// Función que calcula el pago individual
function calcularPago(horas, tarifa) {
  return horas * tarifa;
}

// Acumulador (SIEMPRE fuera del bucle)
let totalNomina = 0;

console.log("📋 Generando nómina mensual...\n");

// Bucle principal
for (let i = 0; i < freelancers.length; i++) {
  const empleado = freelancers[i];
  const pago = calcularPago(empleado.horas, empleado.tarifa);

  totalNomina += pago;

  console.log(
    `👤 ${empleado.nombre} | Horas: ${empleado.horas} | Tarifa: $${empleado.tarifa}/h → Pago: $${pago}`
  );
}

console.log("\n💰 Total de la nómina: $" + totalNomina);
console.log("✅ Nómina generada correctamente.");