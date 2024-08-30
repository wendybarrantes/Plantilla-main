/*creo una funcion para traer los enpoints(los datos de la api) y la exporto para poder
 modularizar. Uso el bloque tryCatch para prevenir errores*/

 //get
async function traerDatos(endpoint) {
  try {
      let peticion = await fetch(`http://localhost:3001/${endpoint}`)
      let guardarDatos = await peticion.json()
      return guardarDatos 
  } catch (error) {
    console.log(error);
  }
}
export{traerDatos}


async function traerCantDatos(endpoint) {
  try {
      let peticion = await fetch(`http://localhost:3001/${endpoint}`)
      let cantDatos = await peticion.json()
      return cantDatos.length 
  } catch (error) {
    console.log(error);
  }
}
export {traerCantDatos}


async function traerDatosDeUnPermiso(endpoint,id) {
  try {
      let peticion = await fetch(`http://localhost:3001/${endpoint}/${id}`)
      let guardarDatos = await peticion.json()
      return guardarDatos 
  } catch (error) {
    console.log(error);
  }
}
export {traerDatosDeUnPermiso}

//post
async function enviarDatos(endpoint,objeto) {
  try {
    let peticion = await fetch (`http://localhost:3001/${endpoint}`,{
      method:"POST", headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(objeto)
    })
    let datos = await peticion.json()
    console.log(datos);
    
  } catch (error) {
    console.log(error);
    
  }
}
export{enviarDatos}

//delete
async function eliminarSolicitud(endpoint,id) {
try {
    const peticion = await fetch(`http://localhost:3001/${endpoint}/${id}`,{
      method:"DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
    const datos = await peticion.json()
    console.log(datos);
} catch (error) {
  console.error(error);
}
}
export {eliminarSolicitud}




