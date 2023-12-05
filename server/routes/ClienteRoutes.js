// routes/clienteRoutes.js
const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

// Rutas para clientes
router.get('/', ClienteController.obtenerClientes);
router.post('/', ClienteController.agregarCliente);

module.exports = router;
