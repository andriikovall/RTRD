const express = require('express');

const router = express.Router();
const authentication = require('passport').authenticate('jwt', { session: false });
const controller = require('../controllers/user');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/sponsors', controller.getTopSponsors);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
