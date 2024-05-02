const Customer = require('../models/customer');

// Obtener todos los clientes
exports.getAllCustomers = async () => {
  try {
    return await Customer.findAll();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Crear un nuevo cliente
exports.createCustomer = async (customerData) => {
  try {
    return await Customer.create(customerData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtener un cliente por su ID
exports.getCustomerById = async (customerId) => {
  try {
    return await Customer.findByPk(customerId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Actualizar un cliente por su ID
exports.updateCustomer = async (customerId, customerData) => {
  try {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      throw new Error('Customer not found');
    }
    return await customer.update(customerData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Eliminar un cliente por su ID
exports.deleteCustomer = async (customerId) => {
  try {
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      throw new Error('Customer not found');
    }
    return await customer.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
};
