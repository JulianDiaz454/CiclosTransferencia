// Ejercicio 3

// Declaramos los fondos de la cuenta
let fondos = 100000;

// Bucle para interactuar con los fondos
while (true) {
    // Mostramos los fondos actuales
    alert(`Fondos: ${fondos}`);

    // Se solicita el valor a retirar
    let retiro = prompt("Ingrese el valor a retirar");

    // Validamos si hay fondos suficientes
    if (retiro < fondos) {
        fondos -= retiro; // Descontamos el retiro a lo fondos
        alert("Retiro exitoso");
    } else {
        // Se rtermina el ciclo
        alert("Fondos insuficientes");
        break;
    }
}