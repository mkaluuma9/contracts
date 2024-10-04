const express = require('express');
const router = express.Router();
const litigationController = require('../controllers/litigationController');


router.post('/create', litigationController.createLitigation);
router.get('/', litigationController.getAllLitigations);
router.get('/:id', litigationController.getLitigationById);
router.put('/:id', litigationController.updateLitigation);
router.delete('/:id', litigationController.deleteLitigation);

module.exports = router;
