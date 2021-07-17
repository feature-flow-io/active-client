import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AccountNewFormComponent extends Component {
  @service store;
  @service router;

  @tracked name = '';
  @tracked subdomain = '';
  @tracked errors = [];

  @action async createAccount(event) {
    event.preventDefault();
    const accountRecord = this.store.createRecord('account', {
      name: this.name,
      subdomain: this.subdomain,
    });

    try {
      const response = await accountRecord.save();
      this.router.transitionTo('accounts.account', response.id);
    } catch (error) {
      this.errors = error.errors;
    }
  }

  @action update(type, event) {
    this[type] = event.target.value;
  }

  get isDisabled() {
    const fields = [this.name, this.subdomain];
    return fields.some((field) => field.length === 0);
  }
}
