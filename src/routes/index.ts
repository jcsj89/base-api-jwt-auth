import { Router } from 'express';
import userRoutes from '../modules/user/routes/user.routes';

const routes = Router();

routes.use(userRoutes);

routes.get('/', (request, response) => {
  response.json({ message: 'Hello Dev #2' });
});

export default routes;
