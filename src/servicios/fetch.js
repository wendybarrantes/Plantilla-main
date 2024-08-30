/*creo una funcion para traer los enpoints(los datos de la api) y la exporto para poder
 modularizar. Uso el bloque tryCatch para prevenir errores*/


//  Doy como parametro endpoint para poder reutilizar la función con todos los endpoints

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

//get
// Este metodo se usa en la cantidad de solicitudes, únicamente toma la cantidad de datos 
//que hay en el endpoint y los retorna
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

//get
// Este metodo trae los datos de un permiso en específico, pasandole el id por parámetro.
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
// Este metodo toma por parametro el endpoint en el que se va a guardar y 
//la estrucutra de datos que se van a guardar en la API
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
// Este metodo elimina una solicitud por medio del id, recibe el id de la 
//solictud para eliminar únicamente esa solicitud
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




