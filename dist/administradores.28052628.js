alert("estoy enlazado");
let tabla = document.getElementById("dataTable");
async function mostrarAdministradores() {
    let administradores = await traerDatos("administradores");
    administradores.forEach((administrador)=>{
        let tbody = document.createElement("tbody");
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        let tdApellido = document.createElement("td");
        let tdSede = document.createElement("td");
        tdNombre.textContent = administrador.Nombre;
        tdApellido.textContent = administrador.Apellido;
        tdSede.textContent = administrador.Sede;
        tbody.appendChild(tr);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdSede);
        tabla.appendChild(tbody);
    });
}
mostrarAdministradores();

//# sourceMappingURL=administradores.28052628.js.map
