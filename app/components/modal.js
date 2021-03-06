import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ModalComponent extends Component {
  @tracked isActive = false;

  @action showModal() {
    this.isActive = true;
  }

  @action hideModal() {
    this.isActive = false;
  }
}
