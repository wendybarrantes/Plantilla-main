import { traerDatos,eliminarSolicitud,enviarDatos,traerDatosDeUnPermiso } from "../servicios/fetch";
const contenedor = document.getElementById("contenedor");

async function cargarSolicitudes() {
    const solicitudes = await traerDatos("solicitudes");

    contenedor.innerHTML = ""

    solicitudes.forEach(solicitud => {
        // 20-02-24
        // fechaCorta = 20/02/24 
        // dia = 20
        // mes = 02
        const fechaCorta = solicitud.fecha_salida
        const [dia,mes] = fechaCorta.includes('-') ? fechaCorta.split('-') : fechaCorta.split('/')

        // Creación de los contendores y se le agregan las clases para los estilos
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-lg-4");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "card-margin");

        const headerDiv = document.createElement("div");
        headerDiv.classList.add("card-header", "no-border");

        const nombreEstudiante = document.createElement("h5");
        nombreEstudiante.classList.add("card-title");
        nombreEstudiante.textContent = solicitud.Nombre;

        const bodyDiv = document.createElement("div");
        bodyDiv.classList.add("card-body", "pt-0");

        const widgetDiv = document.createElement("div");
        widgetDiv.classList.add("widget-49");

        const titleWrapperDiv = document.createElement("div");
        titleWrapperDiv.classList.add("widget-49-title-wrapper");

        const dateDiv = document.createElement("div");
        dateDiv.classList.add("widget-49-date-primary");

        const dateDay = document.createElement("span");
        dateDay.classList.add("widget-49-date-day");
        dateDay.textContent = dia

        const dateMonth = document.createElement("span");
        dateMonth.classList.add("widget-49-date-month");
        dateMonth.textContent = mes 

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("widget-49-meeting-info");

        const infoTitle = document.createElement("span");
        infoTitle.classList.add("widget-49-pro-title");
        infoTitle.textContent = "Solicitud de préstamo";

        const btnSolicitudesDiv = document.createElement("div");
        btnSolicitudesDiv.classList.add("btnSolicitudes");

        const btnAceptar = document.createElement("button");
        btnAceptar.classList.add("btn", "btnAceptar");
        btnAceptar.textContent = "Aceptar";
        
        btnAceptar.addEventListener("click",async()=>{
          const infoSolicitud = await traerDatosDeUnPermiso("solicitudes",solicitud.id)  
          
          const historial = {
            Nombre: infoSolicitud.Nombre,
            codigoPC: infoSolicitud.codigoPC,
            sede: infoSolicitud.sede,
            fecha_salida: infoSolicitud.fecha_salida,
            fecha_entrada: infoSolicitud.fecha_entrada
          }

          await enviarDatos("historialSolicitudes",historial)

          await eliminarSolicitud("solicitudes",solicitud.id)

          cargarSolicitudes()
        })

        const btnRechazar = document.createElement("button");
        btnRechazar.classList.add("btn", "btnRechazar");
        btnRechazar.textContent = "Rechazar"; 

        btnRechazar.addEventListener("click",async()=>{
            await eliminarSolicitud("solicitudes",solicitud.id)
            cargarSolicitudes()
        })


        // Estructura de las etiquetas y contenedores
        dateDiv.appendChild(dateDay);
        dateDiv.appendChild(dateMonth);

        infoDiv.appendChild(infoTitle);

        titleWrapperDiv.appendChild(dateDiv);
        titleWrapperDiv.appendChild(infoDiv);

        btnSolicitudesDiv.appendChild(btnAceptar);
        btnSolicitudesDiv.appendChild(btnRechazar);

        widgetDiv.appendChild(titleWrapperDiv);
        widgetDiv.appendChild(btnSolicitudesDiv);

        bodyDiv.appendChild(widgetDiv);

        headerDiv.appendChild(nombreEstudiante);  

        cardDiv.appendChild(headerDiv);
        cardDiv.appendChild(bodyDiv);

        colDiv.appendChild(cardDiv);

        contenedor.appendChild(colDiv);
    });
}

cargarSolicitudes();
