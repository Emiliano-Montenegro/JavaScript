// Simulador Interactivo para la primer Pre Entrega

const PRODUCTO1 = 1000;
const PRODUCTO2 = 1500;
const PRODUCTO3 = 2000;
let cantidad;
let total = 0;
let opcion;
let agregar;

function calculo(acumulado, precio, cantidad) {
    return acumulado + precio*cantidad
}

function mostrarMenu() {
    return parseInt (prompt('Que producto deseas elegir?' + "\n" + "\n" +
    "1- Cera para cabello: $" + PRODUCTO1 + "\n" +
    "2- Shampoo para cabello: $" + PRODUCTO2 + "\n" +
    "3- Aceite para barba: $" + PRODUCTO3 + "\n"));
}

alert('Bienvenido al carrito de compra de tu Barberia');

do{
    opcion = mostrarMenu();

    while (!(opcion >= 1 && opcion <=3)) {
        alert("Ingrese una opción correcta")
        opcion = mostrarMenu()
    }

    cantidad = parseInt(prompt("Ingrese la cantidad que desea"));

    switch (opcion) {
        case 1:
            total = calculo(total, PRODUCTO1, cantidad);
            break;    
        case 2:
            total = calculo(total, PRODUCTO2, cantidad);
            break;
        case 3:
            total = calculo(total, PRODUCTO3, cantidad);
            break;
        default:
            alert("Ingrese una opcion correcta");
    }
    agregar = prompt("Deseas agregar mas productos al carrito? Si \ No")
    
    while (!(agregar.toLowerCase() === "si" || agregar.toLowerCase() === "no")) {
        alert("Ingrese una opción correcta (Si / No)");
        agregar = prompt("Deseas agregar más productos al carrito? Si / No");
    }
    
} while (agregar.toLowerCase() !== "no" )

alert ("El total a pagar es: $" + total)