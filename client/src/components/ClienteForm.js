// ClienteForm.js

import React, { useState } from "react";

const ClienteForm = () => {
  const [cliente, setCliente] = useState({
    Nombre: "",
    Apellido: "",
    Direccion: "",
    Ciudad: "",
    Email: "",
    Telefono: "",
    Ocupacion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({ ...prevCliente, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al agregar cliente");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Cliente agregado:", data);
        window.location.reload();
      })
      .catch((error) => console.error("Error al agregar cliente:", error));
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Agregar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-600">
          Nombre:
          <input
            type="text"
            name="Nombre"
            value={cliente.Nombre}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            name="Apellido"
            value={cliente.Apellido}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>
        <br />
        <label>
          Dirección:
          <input
            type="text"
            name="Direccion"
            value={cliente.Direccion}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </label>
        <br />
        <label>
          Ciudad:
          <input
            type="text"
            name="Ciudad"
            value={cliente.Ciudad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="Email"
            value={cliente.Email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="text"
            name="Telefono"
            value={cliente.Telefono}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ocupación:
          <input
            type="text"
            name="Ocupacion"
            value={cliente.Ocupacion}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Agregar Cliente</button>
      </form>
    </div>
  );
};

export default ClienteForm;
