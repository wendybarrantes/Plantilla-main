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




