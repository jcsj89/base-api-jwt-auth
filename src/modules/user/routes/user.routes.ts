import { Router } from 'express';
import UserController from '../controller/UserController';

const userController = new UserController();
const userRoutes = Router();

userRoutes.get('/users', userController.index);
userRoutes.post('/users', userController.create);

export default userRoutes;
