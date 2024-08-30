 /*importo la funcion traer datos. referencio los ids para poder validarlos.
 creo la funcion validar datos. creo la funcion ejecutar validacion, si los datos son correctos 
 me redirige a la pagina de inicio y sino da un mensaje error.
 Le doy un evento al boton*/


 //get
import {enviarDatos, traerDatos } from "../servicios/fetch"
let btn = document.getElementById("iniciarSesion")

async function validarDatos(nombre,clave) {
   
    let guardarDatos = await traerDatos("administradores")
    
    let validarUsuario= guardarDatos.find(usuario=>
        usuario.Nombre===nombre && usuario.Clave===clave
    )
    return validarUsuario
}

async function ejecutarValidacion(){
    let nombre = document.getElementById("nombre")
    let clave = document.getElementById("clave")
    
    let llamarDatos = await validarDatos(nombre.value,clave.value)
    if (llamarDatos && nombre.value && clave.value) {
        localStorage.setItem("nombreUsuario",nombre)
        window.location.href="inicio.html"
    }
    else{
        let error = document.getElementById("error")
        error.style.display="block"
        error.textContent="usuario incorrecto O llene los espacios"
        
    }

}
btn.addEventListener("click",ejecutarValidacion)




