// Ejercicio 7

// Declaramos dos contadores
let pares = 0;
let impares = 0;

// Bucle para solicitar 10 números
for (let i = 1; i <= 10; i++) {
    // Solicitamos el número
    let num = prompt("Ingrese un número")

    // Validamos si el número es par o impar
    if (num % 2 == 0) {
        pares++; // Incrementamos el contador de pares
    } else {
        impares++; // Incrementamos el contador de impares
    }
}

alert(`Cantidad de números pares: ${pares}`);
alert(`Cantidad de números impares: ${impares}`);