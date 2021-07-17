import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AccountsAccountRoute extends Route {
  @service store;

  async model({ account_id }) {
    return this.store.findRecord('account', account_id);
  }
}
