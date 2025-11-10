// Ejercicio 8

// Se declaran las variables
let user = "julian";
let password = 123;
let bandera = true;

// Ciclo para controlar el ingreso
for (let i = 1; i <= 3; i++) {
    // Solicitamos al usuario los datos de ingreso
    let user_intento = prompt("Ingrese el usuario");
    let pass_intento = prompt("Ingrese la contraseña");

    // Condicional para determinar el acceso
    if (user_intento == user && pass_intento == password) {
        alert("Acceso concedido")
        // Declaramos bandera como falsa 
        bandera = false;
        break; // Rompemos el ciclo
    }
}

// Condición para determinar si se muestra el mensaje
if (bandera) {
    alert("Acceso denegado")
}