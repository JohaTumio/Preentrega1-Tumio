
const saludo = (nombre) => {
    nombre = prompt("Ingrese su nombre").toUpperCase()
    while (nombre == "") {
        alert("Reingrese su nombre")
        nombre = prompt("Ingrese su nombre").toUpperCase()
    }
    frase = `¡Bienvenido/a a nuestra página de hoteles con spa ${nombre}!`
    alert(frase)
}
saludo()

let opcion = prompt("¿Te gustaría conocer la ubicación de nuestros hoteles?\nIngrese S o N").toUpperCase()

if (opcion == "S") {
    let opcionMenu
    do {
        let menu = "Ingrese: \n1 - Hoteles en CABA\n2 - Hoteles en zona oeste\n3 - Hoteles en zona sur\n0 - para salir"
        opcionMenu = Number(prompt(menu))
        if (opcionMenu == 1) {
            alert("-Cielo Spa: Posadas 1075, Retiro\n-Spa Faen: Gorriti 5601, Palermo")
        } else if (opcionMenu == 2) {
            alert("-Spa Urbano: Bartolomé Mitre 115, Ramos Mejia\n-Armonium Spa: Rincón 3170, San Justo")
        } else if (opcionMenu == 3) {
            alert("-Pilar Spa: Ministro Brin 3704, Lanús")
        } else if (opcionMenu == 0) {
            alert("¡Hasta Luego!")
        } else {
            alert("Opción incorrecta")
        }
    } while (opcionMenu != 0);
} else if (opcion == "N") {
    alert("Que sigas disfrutando de nuestra web")
} else {
    alert("Opción incorrecta")
}

let consultaReserva
let cantidadDePersonas

let preguntaDeReserva = prompt("¿Te gustaria hacer una reserva?\n Ingrese: S o N").toUpperCase()
if (preguntaDeReserva == "S") {
    do {
        cantidadDePersonas = Number(prompt("Ingrese cantidad de personas para reservar"))
        let reserva = ""
        for (let i = 0; i < cantidadDePersonas; i++) {
            let nombre = prompt("Ingrese nombre de la persona " + (i + 1))
            reserva += nombre + "\n"
        }
        alert("La lista de reserva es:\n" + reserva)
        consultaReserva = Number(prompt("¿Quieres hacer algun cambio? Elija:\n1- SI\n2 - NO"))
    } while (consultaReserva != 2);
} else if (preguntaDeReserva == "N") {
    alert("Que sigas disfrutando de nuestra web")
} else {
    alert("Opción incorrecta")
}

const precioReserva = () => {
    let precioPorPersona = 2500
    let precioFinal = (cantidadDePersonas * precioPorPersona)
    frase = `El total a pagar por la estadía es de: $${precioFinal}`
    alert(frase)
}
precioReserva()

atencionAlCliente = Number(prompt("¿Te gustaría contestar una breve encuesta sobre nuestra atención?\n Ingrese: \n1- SI \n2- NO"))
let menuAtencion
let opcionMenuAtencion

if (atencionAlCliente == 1) {
    menuAtencion = "Ingrese: \n1 - Está muy conforme\n2 - Esta poco conforme\n3 - No está para nada conforme"
    opcionMenuAtencion = Number(prompt(menuAtencion))
    if (opcionMenuAtencion == 1) {
        alert("Estamos felices de poder cumplirle a nuestros clientes")
    } else if (opcionMenuAtencion == 2 || opcionMenuAtencion == 3) {
        alert("Lamentamos no poder cumplir con sus expectativas, seguiremos trabajando para mejorar")
    }
} else if (atencionAlCliente == 2) {
    alert("¡Gracias de todas formas!")
} else {
    alert("Opción incorrecta")
}

const catalogo = [
    { id: 1, categoria: "Aromaterapia", precio: 380, nombre: "aceite Esencial de jazmín" },
    { id: 2, categoria: "Aromaterapia", precio: 415, nombre: "aceite esencial de lavanda" },
    { id: 3, categoria: "Aromaterapia", precio: 440, nombre: "aceite esencial de magnolia" },
    { id: 4, categoria: "aceite para masajes", precio: 695, nombre: "aceite para masajes de romero" },
    { id: 5, categoria: "aceite para masajes", precio: 530, nombre: "aceite neutro para masajes" },
    { id: 6, categoria: "sal de baño", precio: 490, nombre: "sal de baño aromática" },
    { id: 7, categoria: "crema facial", precio: 1300, nombre: "crema facial baba de caracol" },
    { id: 8, categoria: "crema corporal", precio: 2200, nombre: "crema corporal de almendras" },
    { id: 9, categoria: "crema corporal", precio: 2230, nombre: "crema corporal de coco" }
]
const carrito = []

let productoElegido
let mostrarProductos
let seguirComprando
let totalComprado

const buscarCatalogo = (id) => {
    return catalogo.find(el => el.id === id)
}

let preguntaDeCompra = prompt("¿Te gustaria comprar algunos de los productos q tenemos a la venta?\n Ingrese: S o N").toUpperCase()
if (preguntaDeCompra == "S") {
    while (seguirComprando != 1) {
        mostrarProductos = parseInt(prompt("Este es nuestro catálogo, elige por su número de ID: \n" + catalogo.map((el) => el.id + ") " + el.nombre + " $" + el.precio).join("\n")))
        if (mostrarProductos >= 1 && mostrarProductos <= 9) {
            productoElegido = buscarCatalogo(mostrarProductos)
        } else {
            alert("El número ingresado es inválido")
        }
        carrito.push(productoElegido)
        totalComprado = ""
        carrito.forEach(carrito => totalComprado += `- ${carrito.nombre} $${carrito.precio} \n`)
        alert(`Tu carrito tiene hasta el momento:\n${totalComprado}`)
        seguirComprando = Number(prompt("¿Quieres seguir comprando? Elija:\nCualquier tecla para seguir\n1 - para salir"))
    }
} else if (preguntaDeCompra == "N") {
    alert("Que sigas disfrutando de nuestra web")
} else {
    alert("Opción incorrecta")
}

let productoEliminado
let elegirProductoEliminar

const buscarCarrito = (id) => {
    return carrito.find(el => el.id === id)
}

let seguirEliminando
let eliminarProductos = prompt("¿Te gustaria gustaria eliminar algun producto?\n Ingrese: S o N").toUpperCase()
if (eliminarProductos == "S") {
    while (seguirEliminando != 1) {
        elegirProductoEliminar = parseInt(prompt("Si deseas eliminar algún producto, elige su ID: \n" + "Tu carrito contiene: \n" + carrito.map(el => el.id + ") " + el.nombre + " $" + el.precio).join("\n")))
        if (elegirProductoEliminar >= 1 && elegirProductoEliminar <= 9) {
            productoEliminado = buscarCarrito(elegirProductoEliminar)
            carrito.splice(((productoEliminado.id) - 1), 1)
        } else {
            alert("El número ingresado es inválido")
        }
        seguirEliminando = Number(prompt("¿Quieres seguir eliminando? Elija:\nCualquier tecla para seguir\n1 - para salir"))
    }
}

let gastoTotal = 0
for (producto of carrito) {
    gastoTotal += producto.precio
} alert("Muchas Gracias por tu compra! Tu gasto total es: $" + gastoTotal)