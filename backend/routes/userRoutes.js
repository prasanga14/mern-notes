import express from 'express';
import * as user from '../controller/userController.js';

const router = express.Router();

router.get('/', user.createUser);

export default router;
