import {enviarDatos} from "../servicios/fetch"

const btnAgregarPermisos = document.getElementById("btnEnviarFormulario")

async function agregarPermisos() {
    const nombre = document.getElementById("nombre").value
    const codigo = document.getElementById("codigo").value
    const sede = document.getElementById("sede").value
    const fecha_salida = document.getElementById("fecha_salida").value
    const fecha_entrada = document.getElementById("fecha_entrada").value

    const permiso = {
        Nombre:nombre,
        codigoPC:codigo,
        sede:sede,
        fecha_salida:fecha_salida,
        fecha_entrada:fecha_entrada
    }

    await enviarDatos("solicitudes",permiso)
}
btnAgregarPermisos.addEventListener("click",agregarPermisos)