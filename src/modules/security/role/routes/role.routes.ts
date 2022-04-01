import { Router } from 'express';
import RoleController from '../controller/RoleController';
import isAuthenticated from '../../../../middleware/isAuthenticated';
import authorization from '../../../../middleware/authorization';

const roleController = new RoleController();
const roleRoutes = Router();

roleRoutes.get('/roles', roleController.index);
roleRoutes.post('/roles', authorization, roleController.create);
roleRoutes.put(
  '/roles/:id',
  isAuthenticated,
  authorization,
  roleController.update,
);
roleRoutes.delete('/roles/:id', roleController.delete);

export default roleRoutes;
