const express = require('express');
const router = express.Router();
const billboardController = require('../controllers/billboardController');

// Rutas relacionadas con la cartelera
router.get('/billboards', billboardController.getAllBillboards);
router.post('/billboards', billboardController.createBillboard);
router.get('/billboards/:id', billboardController.getBillboardById);
router.put('/billboards/:id', billboardController.updateBillboard);
router.delete('/billboards/:id', billboardController.deleteBillboard);

module.exports = router;
