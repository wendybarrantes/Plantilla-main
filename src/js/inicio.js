import { traerCantDatos } from "../servicios/fetch";

const num_solicitudes = document.getElementById("num_solicitudes")

async function cargar_num_solicitudes() {
    const cantidad_solicitudes = await traerCantDatos("solicitudes")
    num_solicitudes.textContent = cantidad_solicitudes
}
cargar_num_solicitudes()