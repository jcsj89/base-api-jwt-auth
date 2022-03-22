import { Router } from 'express';
import UserController from '../controller/UserController';

const userController = new UserController();
const userRoutes = Router();

userRoutes.get('/users', userController.index);

export default userRoutes;
