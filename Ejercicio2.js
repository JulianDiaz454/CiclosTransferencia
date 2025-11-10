// Ejercicio 2

// Se declara una variable booleana
let bandera = true;

// Ciclo que tomara el número del usuario para generar una tabla
while (bandera) {
    // Solicitamos el número al usuario
    let num = prompt("Ingrese un número");

    alert(`Tabla del ${num}`);

    // Ciclo para generar la tabla de multiplicar
    for (let i = 1; i <= 12; i++) {
        alert(`${num} x ${i} = ${num * i}`);
    }

    let res = prompt("¿Quiere ingresar otro número? (si/no)");

    // Por medio de un operador terniario validamos la respuesta
    bandera = (res == "si" || res == "s") ? true : false;
}