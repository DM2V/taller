import React, { useEffect, useState } from "react";

const ReportFilterByName = () => {
  const [nombre, setNombre] = useState("");
  const [reportes, setReportes] = useState([]);
  const [reportesFiltrados, setReportesFiltrados] = useState([]);

  useEffect(() => {
    fetch("/api/reportes")
      .then((response) => response.json())
      .then((data) => setReportes(data))
      .catch((error) => console.error("Error al obtener los reportes:", error));
  }, []);

  const handleFilterByName = () => {
    // Filtrar los reportes por nombre
    const filteredReports = reportes.filter((reporte) =>
      reporte.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
    setReportesFiltrados(filteredReports);
  };

  return (
    <div>
      <h2>Filtrar Reportes por Nombre</h2>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <button onClick={handleFilterByName}>Filtrar</button>
      </div>

      <div>
        <h3>Reportes Originales</h3>
        <ul>
          {reportes.map((reporte) => (
            <li key={reporte.id}>
              Nombre: {reporte.nombre}, Edad: {reporte.edad}, Otros Datos:{" "}
              {reporte.otrosDatos}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Reportes Filtrados por Nombre</h3>
        <ul>
          {reportesFiltrados.map((reporte) => (
            <li key={reporte.id}>
              Nombre: {reporte.nombre}, Edad: {reporte.edad}, Otros Datos:{" "}
              {reporte.otrosDatos}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReportFilterByName;
