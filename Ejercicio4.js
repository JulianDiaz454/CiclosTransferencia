// Ejercicio 4

// Bucle para pasar por cada estudiante
for (let i = 1; i <= 5; i++) {
    alert(`Estudiante ${i}`);

    // Variable para almacenar la sima
    let suma = 0;

    // Bucle para tomar las notas
    for (let j = 1; j <= 5; j++) {
        let nota = prompt(`Ingrese la nota ${j}`);

        // Sumamos la nota a la suma total
        suma += nota;
    }

    // Obtenemos el promedio
    let promedio = suma / 5;

    // Seleccionamos el mensaje a partir de una condición
    let mensaje = (promedio <= 3.0) ? "Estudiante reprobado" : "Estudiante aprobado";

    // Mostramos el promedio y el mensaje
    alert(`${mensaje} - Nota promedio: ${promedio}`);
}