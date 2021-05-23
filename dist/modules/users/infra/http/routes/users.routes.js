"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../../../../../config/upload"));

var _UsersController = _interopRequireDefault(require("../controllers/UsersController"));

var _UserAvatarControlller = _interopRequireDefault(require("../controllers/UserAvatarControlller"));

var _ensureAuthentication = _interopRequireDefault(require("../middlewares/ensureAuthentication"));

var _celebrate = require("celebrate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersController = new _UsersController.default();
const userAvatarController = new _UserAvatarControlller.default();
const upload = (0, _multer.default)(_upload.default.multer);
const usersRouter = (0, _express.Router)();
usersRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    name: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().required()
  }
}), usersController.create);
usersRouter.patch('/avatar', _ensureAuthentication.default, upload.single('avatar'), userAvatarController.update);
var _default = usersRouter;
exports.default = _default;