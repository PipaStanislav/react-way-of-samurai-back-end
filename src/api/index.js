const { Router } = require('express');

const userRouter = require('./user/user-router');
const profileRouter = require('./profile/profile-router');
const authRouter = require('./auth/auth-router');
const postRouter = require('./post/post-router');
const dialogRouter = require('./dialog/dialog-router');

const router = Router();

router.use('/user', userRouter);
router.use('/profile', profileRouter);
router.use('/auth', authRouter);
router.use('/post', postRouter);
router.use('/dialog', dialogRouter);

module.exports = router;