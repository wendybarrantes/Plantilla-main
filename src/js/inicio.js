import { traerCantDatos } from "../servicios/fetch";

const numSolicitudes = document.getElementById("numSolicitudes")

// No calculo de cantidad de solicitudes con el reduce. Pero uso el get para 
// obtener la cantidad total de solicitudes que hayan en la API
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