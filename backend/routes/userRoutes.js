import express from 'express';
import * as user from '../controller/userController.js';

const router = express.Router();

router.post('/register', user.createUser);

router.post('/login', user.login);

export default router;
