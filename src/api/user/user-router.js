const { Router } = require('express');
const userController = require('./user-controller');

const router = Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

router.post('/follow', userController.follow);
router.post('/unfollow', userController.unfollow);



module.exports = router;