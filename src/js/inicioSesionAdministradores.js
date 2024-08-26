 /*importo la funcion traer datos. referencio los ids para poder validarlos.
 creao la funcion validar datos. creo la funcion ejecutar validacion, si los datos son correctos 
 me redirige a la pagina de inicio y sino da un mensaje error.
 Le doy en evento al boton*/


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
    let nombre = document.getElementById("nombre").value
    let clave = document.getElementById("clave").value
    
    let llamarDatos = await validarDatos(nombre,clave)
    if (llamarDatos) {
        window.location.href="inicio.html"
    }
    else{
        let error = document.getElementById("error")
        error.style.display="block"
        error.textContent="usuario incorrecto, llene los espacios"
        
    }

}
btn.addEventListener("click",ejecutarValidacion)




