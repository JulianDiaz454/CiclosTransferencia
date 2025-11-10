// Ejercicio 1

// Mostramos el primer número primo
alert("Número primo: 2");

// Ciclo para mostrar los número primos hast el 50
for (let i = 3; i <= 50; i++) {
    // Se declara una variable booleana
    let bandera = true;

    // Ciclo para determinar los números hasta i
    for (let j = 2; j < i; j++) {
        // Validamos que el número sea primo
        if (i % j === 0) {
            // Se cambia bandera y se rompe el ciclo
            bandera = false;
            break;
        }
    }
    // Con la bandera en true mostramos el número primo
    if (bandera) {
        alert(`Número primo: ${i}`);
    }
}