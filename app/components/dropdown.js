import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DropdownComponent extends Component {
  @tracked isHidden = true;

  @action toggleVisibility(event) {
    event.preventDefault();
    this.isHidden = !this.isHidden;
  }

  @action hideVisibility() {
    this.isHidden = true;
  }
}
