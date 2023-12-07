// client/src/components/ClienteList.js
import React, { useEffect, useState } from "react";

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Usar la dirección completa del servidor para la solicitud
    fetch("http://localhost:5000/api/clientes")
      .then((response) => response.json())
      .then((data) => setClientes(data))
      .catch((error) => console.error("Error fetching clientes:", error));
  }, []);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.ID}>
            {cliente.Nombre} {cliente.Apellido} - {cliente.Email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;
