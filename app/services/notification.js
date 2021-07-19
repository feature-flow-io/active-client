import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import uuid from '../utils/uuid';

export default class NotificationService extends Service {
  @tracked notifications = [];

  @action notify({ message, type }) {
    this.notifications.pushObject({
      id: uuid(),
      message,
      type,
    });
  }

  removeNotification(id) {
    this.notifications = this.notifications.filter((notification) => {
      return notification.id !== id;
    });
  }
}
