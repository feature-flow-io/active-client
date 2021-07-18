import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AccountRenameFormComponent extends Component {
  @service store;

  @tracked name = this.account.name;
  @tracked errors = [];

  @action async renameAccount(event) {
    event.preventDefault();

    const account = await this.store.peekRecord('account', this.account.id);
    account.name = this.name;

    try {
      await account.save();
    } catch (error) {
      this.errors = error.errors;
    }
  }

  @action update(type, event) {
    this[type] = event.target.value;
  }

  get isDisabled() {
    return this.account.name === this.name || !this.name.length;
  }

  // private

  get account() {
    return this.args.account;
  }
}
