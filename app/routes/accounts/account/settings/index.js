import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AccountsAccountSettingsIndexRoute extends Route {
  @service store;

  async model() {
    const { account_id } = this.paramsFor('accounts.account');
    return this.store.findRecord('account', account_id);
  }
}
