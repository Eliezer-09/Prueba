const Billboard = require('../models/billboard');

// Obtener todas las carteleras
exports.getAllBillboards = async () => {
  try {
    return await Billboard.findAll();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Crear una nueva cartelera
exports.createBillboard = async (billboardData) => {
  try {
    return await Billboard.create(billboardData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtener una cartelera por su ID
exports.getBillboardById = async (billboardId) => {
  try {
    return await Billboard.findByPk(billboardId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Actualizar una cartelera por su ID
exports.updateBillboard = async (billboardId, billboardData) => {
  try {
    const billboard = await Billboard.findByPk(billboardId);
    if (!billboard) {
      throw new Error('Billboard not found');
    }
    return await billboard.update(billboardData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Eliminar una cartelera por su ID
exports.deleteBillboard = async (billboardId) => {
  try {
    const billboard = await Billboard.findByPk(billboardId);
    if (!billboard) {
      throw new Error('Billboard not found');
    }
    return await billboard.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
};
