import { Router } from 'express';

import ProfileController from '@modules/users/infra/http/controllers/ProfileController';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';

const profileRouter = Router();
const profileController = new ProfileController;

profileRouter.use(ensureAuthentication);

profileRouter.put('/profile', profileController.update);

export default profileRouter;
