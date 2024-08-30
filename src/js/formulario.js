import {enviarDatos} from "../servicios/fetch"

const btnAgregarPermisos = document.getElementById("btnEnviarFormulario")
const casillaTerminos = document.getElementById("terminos")
const condiciones = document.getElementById("condiciones")
const lista = document.getElementById("lista")


condiciones.addEventListener("click",()=>{
    lista.style.display= "block"
})

async function agregarPermisos() {
    const nombre = document.getElementById("nombre")
    const codigo = document.getElementById("codigo")
    const sede = document.getElementById("sede")
    const fecha_salida = document.getElementById("fecha_salida")
    const fecha_entrada = document.getElementById("fecha_entrada")

    if(nombre.value.trim() === "" || codigo.value.trim() === "" || sede.value.trim() === "" || fecha_salida.value.trim() === "" || fecha_entrada.value.trim() === ""){
        const error = document.getElementById("error")
        error.innerHTML = "Por favor complete todos los campos"
        return;
    }
    if(!casillaTerminos.checked){
        const error = document.getElementById("error")
        error.innerHTML = "Por favor acepte los terminos y condiciones"
        return;
    }
    const permiso = {
        Nombre:nombre.value,
        codigoPC:codigo.value,
        sede:sede.value,
        fecha_salida:fecha_salida.value,
        fecha_entrada:fecha_entrada.value
    }
    await enviarDatos("solicitudes",permiso)

    nombre.value = ""
    codigo.value = ""
    sede.value = ""
    fecha_salida.value = ""
    fecha_entrada.value = ""
    window.location.href="portada.html"

}
btnAgregarPermisos.addEventListener("click",agregarPermisos)