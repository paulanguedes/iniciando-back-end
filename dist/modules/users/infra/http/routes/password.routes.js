"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _SendForgotPasswordEmailController = _interopRequireDefault(require("../controllers/SendForgotPasswordEmailController"));

var _ResetPasswordController = _interopRequireDefault(require("../controllers/ResetPasswordController"));

var _celebrate = require("celebrate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const passwordRouter = (0, _express.Router)();
const sendForgotPasswordEmailController = new _SendForgotPasswordEmailController.default();
const resetPasswordController = new _ResetPasswordController.default();
passwordRouter.post('/forgot', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    email: _celebrate.Joi.string().email().required()
  }
}), sendForgotPasswordEmailController.create);
passwordRouter.post('/reset', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    token: _celebrate.Joi.string().uuid().required(),
    password: _celebrate.Joi.string().required(),
    password_confirmation: _celebrate.Joi.string().required().valid(_celebrate.Joi.ref('password'))
  }
}), resetPasswordController.create);
var _default = passwordRouter;
exports.default = _default;