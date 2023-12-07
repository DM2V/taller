const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "Espe2023",
  database: "Practica_Patrones",
  port: 3306,
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a MySQL:", err);
  } else {
    console.log("Conexión exitosa a MySQL");
  }
});

// Obtener todos los clientes
router.get("/", (req, res) => {
  const query = "SELECT * FROM clientes";

  connection.query(query, (err, result) => {
    if (err) {
      console.error("Error al ejecutar la consulta:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    } else {
      res.json(result);
    }
  });
});

// Agregar un nuevo cliente
router.post("/", (req, res) => {
  const nuevoCliente = req.body;

  const query = "INSERT INTO clientes SET ?";

  connection.query(query, nuevoCliente, (err, result) => {
    if (err) {
      console.error("Error al agregar cliente:", err);
      res.status(500).json({ error: "Error al agregar cliente" });
    } else {
      console.log("Cliente agregado con éxito:", result);
      res.status(201).json({ message: "Cliente agregado con éxito" });
    }
  });
});

module.exports = router;
