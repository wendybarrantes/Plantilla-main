import { enviarDatos,traerDatos } from "../servicios/fetch"

let numid = document.getElementById("num-id")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let clave = document.getElementById("clave")
let btnRegistrarEst = document.getElementById("btnRegistrarEst")

async function validarDatos(numid) {
   
    let guardarDatos = await traerDatos("estudiantes")
    
    let validarUsuario = guardarDatos.find(usuario=>
        usuario.numid===numid 
    )
    return validarUsuario
}

async function crearLosEstudiantes() {
 let numid = document.getElementById("num-id")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let clave = document.getElementById("clave")

const respuesta = await validarDatos(numid.value)
console.log(respuesta);
if (respuesta) {
    const error = document.getElementById("error")
    error.innerHTML = "El número de identificación ya existe"
    console.log(numid.value);
    return
}

if(numid.value.trim() === "" || nombre.value.trim() === "" || apellido.value.trim() === "" || clave.value.trim() === ""){
    const error = document.getElementById("error")
    error.innerHTML = "Por favor llene todos los campos"
    return
}
let objeto = {
    nombre: nombre.value,
    apellido: apellido.value,
    clave: clave.value,
    numid: numid.value,
}
await enviarDatos("estudiantes", objeto)
    numid.value = ""
    nombre.value = ""
    apellido.value = ""
    clave.value = ""
}
btnRegistrarEst.addEventListener("click",crearLosEstudiantes)