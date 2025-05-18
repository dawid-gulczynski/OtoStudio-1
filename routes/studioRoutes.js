const express = require('express');
const router = express.Router();
const studioController = require('../controllers/studioController');

router.get('/', studioController.getStudios);
router.get('/:id', studioController.getStudioById);
router.post('/', studioController.addStudio);
router.put('/:id', studioController.updateStudio);
router.delete('/:id', studioController.deleteStudio);

module.exports = router;