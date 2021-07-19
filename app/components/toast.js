import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

const SERVICE_DELAY = 300;
const DELAY = 4000;

export default class ToastComponent extends Component {
  @service notification;

  @action hide(id, event) {
    event.preventDefault();
    const toast = document.getElementById(id);
    toast.classList.replace('toast--animateIn', 'toast--animateOut');
    this.abortFadeout();

    setTimeout(() => this.removeNotification(id), SERVICE_DELAY);
  }

  @action fadeOut(element) {
    this.timeoutId = setTimeout(() => {
      element.classList.replace('toast--animateIn', 'toast--animateOut');

      setTimeout(() => this.removeNotification(element.id), SERVICE_DELAY);
    }, DELAY);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.abortFadeout();
  }

  // private

  removeNotification(id) {
    this.notification.removeNotification(id);
  }

  abortFadeout() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }
}
