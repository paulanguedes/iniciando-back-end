import { Router } from 'express';

import SendForgotPasswordEmailController from '../controllers/SendForgotPasswordEmailController';
import ResetPasswordController from '../controllers/ResetPasswordController';
import { celebrate, Joi, Segments } from 'celebrate';

const passwordRouter = Router();
const sendForgotPasswordEmailController = new SendForgotPasswordEmailController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    }
  }),
  sendForgotPasswordEmailController.create);
passwordRouter.post('/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    }
  }),
  resetPasswordController.create);

export default passwordRouter;
