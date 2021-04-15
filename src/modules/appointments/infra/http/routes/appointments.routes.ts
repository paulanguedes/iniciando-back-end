import { Router } from 'express';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';
import AppointmentsController from '@modules/appointments/infra/http/controllers/AppointmentsController';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthentication);

const appointmentsController = new AppointmentsController();

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
