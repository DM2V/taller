// controllers/clienteController.js
const Cliente = require('../models/ClienteModel');

const ClienteController = {
  obtenerClientes: async (req, res) => {
    try {
      const clientes = await Cliente.find();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  agregarCliente: async (req, res) => {
    const { nombre, apellido, direccion, ciudad, email, telefono, ocupacion } = req.body;
    const nuevoCliente = new Cliente({ nombre, apellido, direccion, ciudad, email, telefono, ocupacion });

    try {
      const clienteGuardado = await nuevoCliente.save();
      res.json(clienteGuardado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ClienteController;
