import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ToastComponent extends Component {
  @service notification;

  @action hide(id, event) {
    event.preventDefault();
    const toast = document.getElementById(id);
    toast.classList.replace('toast--animateIn', 'toast--animateOut');
    this.fadeoutId = null;

    this.timeoutId = setTimeout(() => {
      this.notification.removeNotification(id);
    }, 300);
  }

  @action fadeOut(element) {
    this.fadeoutId = setTimeout(() => {
      element.classList.replace('toast--animateIn', 'toast--animateOut');

      setTimeout(() => {
        this.notification.removeNotification(element.id);
      }, 300);
    }, 4000);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    if (this.timeoutId) clearTimeout(this.timeoutId);
    if (this.fadeoutId) clearTimeout(this.fadeoutId);
  }
}
