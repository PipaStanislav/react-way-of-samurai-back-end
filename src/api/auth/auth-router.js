const { Router } = require('express');
const authController = require('./auth-controller');

const router = Router();

router.post('/login', authController.login);
router.post('/registration', authController.registration);
router.post('/me', authController.me);

module.exports = router;