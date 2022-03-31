import { Router } from 'express';
import UserController from '../controller/UserController';
import isAuthenticated from '../../../middleware/isAuthenticated';
import authorization from '../../../middleware/authorization';

const userController = new UserController();
const userRoutes = Router();

userRoutes.get('/users', userController.index);
userRoutes.post('/users', authorization, userController.create);
userRoutes.put(
  '/users/:id',
  isAuthenticated,
  authorization,
  userController.update,
);
userRoutes.delete('/users/:id', userController.delete);

export default userRoutes;
