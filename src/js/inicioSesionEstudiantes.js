import { traerDatos } from "../servicios/fetch"


let btniniciarSesion= document.getElementById("iniciarSesion")



async function ValidarEstudiantes(numeroid,clave) {
    let datos = await traerDatos("estudiantes")
    let validar = datos.find(dato=>
        dato.numid === numeroid && dato.clave === clave
    )
    return validar
}
async function ejecutarValidacion(){
    let numeroid = document.getElementById("numeroid").value
    let clave = document.getElementById("clave").value
    
    let llamarDatos = await ValidarEstudiantes(numeroid,clave)
    if (llamarDatos) {
        window.location.href="index.html" // Va el formukario de prestamo
    }
    else{
        let error = document.getElementById("error")
        error.style.display="block"
        error.textContent="usuario incorrecto, llene los espacios"
        
    }
}
btniniciarSesion.addEventListener("click",ejecutarValidacion)