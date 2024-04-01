let preciosProductos = {
    "Soja": 450,
    "Maiz": 380,
    "Sorgo": 417,
    "Trigo": 430,
};

function mostrarPrecios() {
    let preciosString = "Precios de los productos:\n";
    for (let producto in preciosProductos) {
        preciosString += producto + ": USD " + preciosProductos[producto] + "\n";
    }
    alert(preciosString);
}

function modificarPrecio() {
    let producto = prompt("Ingrese el nombre del producto a modificar:");
    if (preciosProductos.hasOwnProperty(producto)) {
        let nuevoPrecio = prompt("Ingrese el nuevo precio para " + producto + ":");
        nuevoPrecio = parseFloat(nuevoPrecio);
        if (!isNaN(nuevoPrecio)) {
            preciosProductos[producto] = nuevoPrecio;
            alert("¡Precio de " + producto + " modificado!");
        } else {
            alert("¡Error al ingresar valor!");
        }
    } else {
        alert("¡Producto inexistente!");
    }
}

function menuPrincipal() {
    let opcion;
    do {
        opcion = prompt("¡Bienvenido al sistema de gestión de precios de Numeral Agro!\n\n" +
            "1. Ver precios de productos\n" +
            "2. Modificar precio de un producto\n" +
            "3. Salir\n\n" +
            "Seleccione una opción:");
        switch (opcion) {
            case '1':
                mostrarPrecios();
                break;
            case '2':
                do {
                    modificarPrecio();
                    var continuar = prompt("¿Desea modificar otro precio? (s/n)");
                } while (continuar.toLowerCase() === 's');
                break;
            case '3':
                alert("Saliendo del sistema.");
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== '3');
}

menuPrincipal();

/* Hola Maxi! Paso a explicarte mi primera entrega, vengo de Desarrollo Web y en mi proyecto final de ese curso hice una pagina para una empresa familiar
dedicada a la venta de agroinsumos y a la venta/alquiler de propiedades agropecuarias.En esta entrega me gustaria empezar a desarrollar
un menu interactivo en el cual se muestren los valores diarios de las semillas en precio dolar
y que a su vez permita modificar el precio si es necesario. Tengo conocimiento de lo basico de JS
porque hice el PrepCourse de Henry (decepcionante jajajaja)
Te dejo el repo de mi entrega final por si queres verla :D
https://github.com/nacholujan10/PreEntrega3-Lujan*/
