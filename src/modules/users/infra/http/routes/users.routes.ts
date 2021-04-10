import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import UsersController from '@modules/users/infra/http/controllers/UsersController';
import UserAvatarController from '@modules/users/infra/http/controllers/UserAvatarControlller';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';

const usersController = new UsersController;
const userAvatarController = new UserAvatarController;

const upload = multer(uploadConfig);
const usersRouter = Router();

usersRouter.post('/', usersController.create);

usersRouter.patch('/avatar', ensureAuthentication, upload.single('avatar'), userAvatarController.update);

export default usersRouter;
