/*creo una funcion para traer los enpoints(los datos de la api) y la exporto para poder
 modularizar. Uso el bloque tryCatch para prevenir errores*/

 

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




