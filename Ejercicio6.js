// Ejercicio 6

// Obtenemos un número random entre 1 y 20
let random = Math.floor(Math.random() * (19 - 2 + 1)) + 2;

// Bucle que intera hasta que se adivine el número
while (true) {
    // Solicitamos el número al usuario
    let num = prompt("Adivina el número entre 1 y 20");

    // Validamos si el número es correcto
    if (num == random) {
        alert("número adivinado");
        break; // Cerramos el bucle
    } else {
        // Obtenemos un mensaje con un operador terniario
        let mensaje = (num > random) ? "El número que buscas es menos" : "El número que buscas es mayor";

        alert(mensaje);
    }
}