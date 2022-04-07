import { Router } from 'express';
import userRoutes from '../modules/user/routes/user.routes';
import sessionRoutes from '../modules/security/session/routes/session.route';
import roleRoutes from '../modules/security/role/routes/role.routes';
import userRoleRoutes from '../modules/security/user-role/routes/userRole.routes';

const routes = Router();

routes.use(userRoutes); // rotas dos usuarios
routes.use(sessionRoutes); // rota de sessao, login, etc...
routes.use(roleRoutes); // rotas dos roles
routes.use(userRoleRoutes); // rotas da juncao user e roles

routes.get('/', (request, response) => {
  response.json({ message: 'Hello Dev #2' });
});

export default routes;
