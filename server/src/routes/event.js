const express = require('express');

const router = express.Router();
const authentication = require('passport').authenticate('jwt', { session: false });
const controller = require('../controllers/event');

router.get('/', controller.getAll);
router.get('/sponsors/:id', controller.getTopSponsorsById);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;