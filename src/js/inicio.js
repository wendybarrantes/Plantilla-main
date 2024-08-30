import { traerCantDatos } from "../servicios/fetch";

const numSolicitudes = document.getElementById("numSolicitudes")

async function cargarNumSolicitudes() {
    const cantidadSolicitudes = await traerCantDatos("solicitudes")
    numSolicitudes.textContent = cantidadSolicitudes
}
function mostarNombreUsuario() {
    const nombreMostrar = document.getElementById("nombreUsuario")

    nombreMostrar.textContent = localStorage.getItem("nombreUsuario")
}

cargarNumSolicitudes()
mostarNombreUsuario()