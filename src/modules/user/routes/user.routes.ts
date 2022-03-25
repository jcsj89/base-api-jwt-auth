import { Router } from 'express';
import UserController from '../controller/UserController';
import isAuthenticated from '../../../middleware/isAuthenticated';

const userController = new UserController();
const userRoutes = Router();

userRoutes.get('/users', userController.index);
userRoutes.post('/users', userController.create);
userRoutes.put('/user/:id', isAuthenticated, userController.update);
userRoutes.delete('/user/:id', userController.delete);

export default userRoutes;
