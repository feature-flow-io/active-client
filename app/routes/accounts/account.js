import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AccountsAccountRoute extends Route {
  @service store;
  @service session;
  @service router;

  async beforeModel(transition) {
    super.beforeModel(transition);

    if (!this.session.currentUserToken) {
      this.router.transitionTo('login');
    }
  }

  async model({ account_id }) {
    return this.store.findRecord('account', account_id);
  }
}
