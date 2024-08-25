import { traerDatos } from "../servicios/fetch"

let nombre = document.getElementById("nombre")
let clave = documnet.getElementById("clave")
let btn = document.getElementById("iniciarSesion")

async function validarDatos(nombre,clave) {
    if (!nombre||!clave) {
        nombre.value= "llene los espacios"
        clave.value="llene los espacios"
        return false
    }
    let guardarDatos = await traerDatos("administradores")
    

}