const productos = [
    { nombre: "Cera para cabello", precio: 1000 },
    { nombre: "Shampoo para cabello", precio: 1500 },
    { nombre: "Aceite para barba", precio: 2000 }
];

let cantidad;
let total = 0;
let opcion;
let agregar;

const carrito = {
    productos: [],
    agregarProducto: function (producto, cantidad) {
        this.productos.push({ producto, cantidad });
    }
};

function calculo(acumulado, precio, cantidad) {
    return acumulado + precio * cantidad;
}

function mostrarMenu() {
    let menu = "Que producto deseas elegir? \n \n";
    productos.forEach((producto, index) => {
        menu += `${index + 1}- ${producto.nombre}: $${producto.precio} \n`;
    });
    return parseInt(prompt(menu));
}

alert("Bienvenido al carrito de compra de tu Barberia");

do {
    opcion = mostrarMenu();

    while (!(opcion >= 1 && opcion <= productos.length)) {
        alert("Ingrese una opción correcta");
        opcion = mostrarMenu();
    }

    let cantidadValida = false;
    while (!cantidadValida) {
        cantidad = parseInt(prompt("Ingrese la cantidad que desea"));
        if (isNaN(cantidad)) {
            alert("Ingrese un número válido");
        } else if (cantidad < 0) {
            alert("Ingrese una cantidad positiva");
        } else {
            cantidadValida = true;
        }
    }

    const productoSeleccionado = productos[opcion - 1];
    total = calculo(total, productoSeleccionado.precio, cantidad);
    carrito.agregarProducto(productoSeleccionado, cantidad);

    agregar = prompt("Deseas agregar mas productos al carrito? Si / No");

    while (!(agregar.toLowerCase() === "si" || agregar.toLowerCase() === "no")) {
        alert("Ingrese una opción correcta (Si / No)");
        agregar = prompt("Deseas agregar más productos al carrito? Si / No");
    }
} while (agregar.toLowerCase() !== "no");

const detalleFactura = carrito.productos.map(
    item => `${item.producto.nombre} x ${item.cantidad}: $${item.producto.precio * item.cantidad}`
);

alert("Detalle de la factura:\n" + detalleFactura.join("\n"));
alert("Total a pagar es: $" + total);
