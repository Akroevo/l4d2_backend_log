const express = require('express');
const router = express.Router();
const survivorController = require('../controllers/survivorController');

router.get('/', survivorController.listSurvivors);
router.get('/:id', survivorController.getSurvivorById);
router.post('/', survivorController.createSurvivor);
router.put('/:id', survivorController.updateSurvivor);
router.delete('/:id', survivorController.deleteSurvivor);

module.exports = router;
