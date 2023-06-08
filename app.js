
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

alert('Bienvenido al carrito de compra de tu Barberia');

do{
    opcion = parseInt (prompt('Que producto deseas elegir?' + "\n" + "\n" +
    "1- Cera para cabello: $" + PRODUCTO1 + "\n" +
    "2- Shampoo para cabello: $" + PRODUCTO2 + "\n" +
    "3- Aceite para barba: $" + PRODUCTO3 + "\n"));

    switch (opcion) {
        case 1:
            cantidad = parseInt(prompt("Ingrese la cantidad que desea"));
            total = calculo(total, PRODUCTO1, cantidad);
            break;
    
        case 2:
            cantidad = parseInt(prompt("Ingrese la cantidad que desea"));
            total = calculo(total, PRODUCTO2, cantidad);
            break;

        case 3:
            cantidad = parseInt(prompt("Ingrese la cantidad que desea"));
            total = calculo(total, PRODUCTO3, cantidad);
            break;

        default:
            alert("Ingrese una opcion correcta");
    }
    agregar = prompt("Deseas agregar mas productos al carrito? Si \ No")
} while (agregar.toLowerCase () !== "no" )


alert ("El total a pagar es: $" + total)