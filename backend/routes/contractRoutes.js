const express = require('express');
const router = express.Router();
const contractController = require('../controllers/contractController');

router.post('/create', contractController.createContract);
router.get('/', contractController.getAllContracts);
router.put('/:id', contractController.updateContract);
router.delete('/:id', contractController.deleteContract);

module.exports = router;
