const { Router } = require('express');
const profileController = require('./profile-controller');

const router = Router();

router.post('/', profileController.createProfile);
router.get('/', profileController.getProfiles);
router.get('/:id', profileController.getProfile);
router.patch('/:id', profileController.updateProfile);
router.delete('/:id', profileController.deleteProfile);

module.exports = router;