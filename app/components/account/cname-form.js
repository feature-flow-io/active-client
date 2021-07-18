import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AccountCnameFormComponent extends Component {
  @service store;

  @tracked cname = this.account.cname;
  @tracked errors = [];

  @action async updateCname(event) {
    event.preventDefault();
    const account = await this.store.peekRecord('account', this.account.id);
    account.cname = this.cname;

    try {
      await account.save();
      console.log(account);
    } catch (error) {
      this.errors = error.errors;
    }
  }

  @action update(type, event) {
    this[type] = event.target.value;
  }

  // private

  get account() {
    return this.args.account;
  }
}
