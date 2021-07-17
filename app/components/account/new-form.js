import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AccountNewFormComponent extends Component {
  @tracked name = '';
  @tracked subdomain = '';

  @action createAccount(event) {
    event.preventDefault();
    console.log({ name: this.name, subdomain: this.subdomain });
  }

  @action update(type, event) {
    this[type] = event.target.value;
  }

  get isDisabled() {
    const fields = [this.name, this.subdomain];
    return fields.some((field) => field.length === 0);
  }
}
