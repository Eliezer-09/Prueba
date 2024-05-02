const Billboard = require('../models/billboard');

// Obtener todas las carteleras
exports.getAllBillboards = async (req, res) => {
  try {
    const billboards = await Billboard.findAll();
    res.json(billboards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva cartelera
exports.createBillboard = async (req, res) => {
  // Implementa la lógica para crear una nueva cartelera aquí
};

// Obtener una cartelera por su ID
exports.getBillboardById = async (req, res) => {
  // Implementa la lógica para obtener una cartelera por su ID aquí
};

// Actualizar una cartelera por su ID
exports.updateBillboard = async (req, res) => {
  // Implementa la lógica para actualizar una cartelera por su ID aquí
};

// Eliminar una cartelera por su ID
exports.deleteBillboard = async (req, res) => {
  // Implementa la lógica para eliminar una cartelera por su ID aquí
};
