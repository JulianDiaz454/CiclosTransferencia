// Ejercicio 5

// Declara una variable para almacenar el valor de la compra
let total_compra = 0;
let bandera = true;

// Bucle para tomar el valor de cada producto
while (bandera) {
    // Solicitamos el valor del producto
    let articulo = prompt("Ingrese el valor del artículo");

    // Coinvertimos el valor a número
    articulo = parseFloat(articulo);

    // Sumamos el valor del artículo al total de la compra
    total_compra += articulo;

    // Preguntamos si se quiere añadir otro articulo
    let res = prompt("¿Quieres hacer otra compra? (si/no)");

    // Validamos la respuesta con un operador terniario
    bandera = (res == "si" || res == "s") ? true : false;
}

// Condicional para determinar el descuento
if (total_compra > 100000) {
    // Determinamos el valor con el descuento
    let total_pagar = total_compra * 0.90;

    // Mostramos el valor final con descuento
    alert(`Se aplico un descuento del 10%\nVALOR A PAGAR: ${total_pagar}`);
} else {
    // Mostramos el valor final sin descuento
    alert(`No se aplico descuento\nVALOR A PAGAR: ${total_compra}`);
}