
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
    if (opcionMenuAtencion == 1){
        alert("Estamos felices de poder cumplirle a nuestros clientes")
    } else if (opcionMenuAtencion == 2 || opcionMenuAtencion == 3){
        alert("Lamentamos no poder cumplir con sus expectativas, seguiremos trabajando para mejorar")
    }
} else if (atencionAlCliente == 2){
    alert("¡Gracias de todas formas!")
} else {
    alert("Opción incorrecta")
}








