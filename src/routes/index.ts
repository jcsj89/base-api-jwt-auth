import { Router } from 'express';
import userRoutes from '../modules/user/routes/user.routes';
import sessionRoutes from '../modules/session/routes/session.route';

const routes = Router();

routes.use(userRoutes);
routes.use(sessionRoutes);

routes.get('/', (request, response) => {
  response.json({ message: 'Hello Dev #2' });
});

export default routes;
