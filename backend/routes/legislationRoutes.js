const express = require('express');
const router = express.Router();
const legislationController = require('../controllers/legislationController'); 

router.post('/create', legislationController.createLegislation);
router.get('/', legislationController.getAllLegislations);
router.get('/:id', legislationController.getLegislationById);
router.put('/:id', legislationController.updateLegislation);
router.delete('/:id', legislationController.deleteLegislation);

module.exports = router;
