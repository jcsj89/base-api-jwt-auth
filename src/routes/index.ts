import { Router } from 'express';
import userRoutes from '../modules/user/routes/user.routes';
import sessionRoutes from '../modules/security/session/routes/session.route';
import roleRoutes from '../modules/security/authorization/role/routes/role.routes';

const routes = Router();

routes.use(userRoutes);
routes.use(sessionRoutes);
routes.use(roleRoutes);

routes.get('/', (request, response) => {
  response.json({ message: 'Hello Dev #2' });
});

export default routes;
