import { Router } from 'express';
import UserController from '../controller/UserController';
import isAuthenticated from '../../../middleware/isAuthenticated';
import authorization from '../../../middleware/authorization';

const userController = new UserController();
const userRoutes = Router();

userRoutes.get('/users', userController.index);
userRoutes.post('/users', userController.create);
userRoutes.put('/users/:id', userController.update);
userRoutes.delete('/users/:id', userController.delete);

export default userRoutes;
