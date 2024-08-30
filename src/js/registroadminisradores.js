import { enviarDatos,traerDatos } from "../servicios/fetch"


   
async function validarDatos(nombre) {
   
    let guardarDatos = await traerDatos("administradores")
    
    let validarUsuario = guardarDatos.find(usuario=>
        usuario.Nombre===nombre
    )
    return validarUsuario
}

   //post
   let btnRegistrar = document.getElementById("btnRegistrar")
   async function crearAdministrador() {
       let nombre = document.getElementById("nombre")
       let apellido = document.getElementById("apellido")
       let clave = document.getElementById("clave")
       let sede = document.getElementById("sede")


    const respuesta = await validarDatos(nombre.value)
    if (respuesta) {
    const error = document.getElementById("error")
    error.innerHTML = "El nombre ya existe"
    return
    }

        if(nombre.value.trim() == "" || apellido.value.trim() == "" || clave.value.trim() == "" || sede.value.trim() == ""){
            const error = document.getElementById("error")
            error.innerHTML = "Todos los campos son obligatorios"
            return
        }

       let objeto = {
           Nombre:nombre.value,
           Apellido:apellido.value,
           Clave:clave.value,
           Sede:sede.value,
       }
       await enviarDatos("administradores",objeto)
       window.location.href="login.html"
   }
   btnRegistrar.addEventListener("click",crearAdministrador)