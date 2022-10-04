const { Router } = require('express');
const dialogController = require('./dialog-controller');

const router = Router();

router.post('/', dialogController.createDialog);
router.get('/', dialogController.getDialogs);
router.get('/:id', dialogController.getDialog);
router.delete('/:id', dialogController.deleteDialog);
router.post('/add-message', dialogController.addMessage);

module.exports = router;