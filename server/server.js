// server.js
const express = require("express");
const mssql = require("mssql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Configurar la conexión a SQL Server
const config = {
  server: "10.40.27.118\\SQLEXPRESS01",
  database: "Practica_Patrones",
  options: {
    trustServerCertificate: true,
    encrypt: false,
    validateBulkLoadParameters: true,
    connectTimeout: 15000,
    port: 1433,
  },
};

// Conectar a SQL Server
mssql.connect(config, (err) => {
  if (err) console.log(err);
  else console.log("Conexión exitosa a SQL Server");
});

const clienteRoutes = require("./routes/ClienteRoutes");
app.use("/api/clientes", clienteRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
