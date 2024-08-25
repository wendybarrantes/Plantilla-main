import { enviarDatos } from "../servicios/fetch"


   
   //post
   let btnRegistrar = document.getElementById("btnRegistrar")
   alert("holaaa")
   async function crearAdministrador() {
       let nombre = document.getElementById("nombre").value
       let apellido = document.getElementById("apellido").value
       let clave = document.getElementById("clave").value
       let sede = document.getElementById("sede").value
       let objeto = {
           Nombre:nombre,
           Apellido:apellido,
           Clave:clave,
           Sede:sede,
       }
       await enviarDatos("administradores",objeto)
       window.location.href="login.html"
   }
   btnRegistrar.addEventListener("click",crearAdministrador)