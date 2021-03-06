"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Notifications = _interopRequireDefault(require("../schemas/Notifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NotificationsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getMongoRepository)(_Notifications.default, 'mongo');
  }

  async create({
    content,
    recipient_id
  }) {
    const notification = this.ormRepository.create({
      content,
      recipient_id
    });
    await this.ormRepository.save(notification);
    return notification;
  }

}

exports.default = NotificationsRepository;