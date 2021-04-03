import { Router } from 'express';

import SendForgotPasswordEmailController from '../controllers/SendForgotPasswordEmailController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const sendForgotPasswordEmailController = new SendForgotPasswordEmailController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot', sendForgotPasswordEmailController.create);
passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;
