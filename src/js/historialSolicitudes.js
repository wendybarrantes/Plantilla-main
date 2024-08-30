import {traerDatos}  from "../servicios/fetch"

let tabla = document.getElementById("dataTable")

 async function mostrarHistorial() {
    let historiales = await traerDatos("historialSolicitudes")

    historiales.forEach(historial=>{
        let tbody = document.createElement("tbody")
        let tr = document.createElement("tr")
        let tdNombre = document.createElement("td")
        let tdCodigoPC = document.createElement("td")
        let tdFechaSalida = document.createElement("td")
        let tdFechaEntrada = document.createElement("td")
        let tdSede = document.createElement("td")

        tdNombre.textContent = historial.Nombre
        tdCodigoPC.textContent = historial.codigoPC
        tdFechaSalida.textContent = historial.fecha_salida
        tdFechaEntrada.textContent = historial.fecha_entrada
        tdSede.textContent = historial.sede
        
        tbody.appendChild(tr)

        tr.appendChild(tdNombre)

        tr.appendChild(tdCodigoPC)

        tr.appendChild(tdFechaSalida)

        tr.appendChild(tdFechaEntrada)

        tr.appendChild(tdSede)

        tabla.appendChild(tbody)
    })
 }
 mostrarHistorial()