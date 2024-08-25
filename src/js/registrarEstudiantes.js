import { enviarDatos } from "../servicios/fetch"

let numid = document.getElementById("num-id")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let clave = document.getElementById("clave")
let btnRegistrarEst = document.getElementById("btnRegistrarEst")

async function crearLosEstudiantes() {
 let numid = document.getElementById("num-id").value
let nombre = document.getElementById("nombre").value
let apellido = document.getElementById("apellido").value
let clave = document.getElementById("clave").value

let objeto = {
    nombre: nombre,
    apellido: apellido,
    clave: clave,
    numid: numid,
}
await enviarDatos("estudiantes", objeto)
}
btnRegistrarEst.addEventListener("click",crearLosEstudiantes)