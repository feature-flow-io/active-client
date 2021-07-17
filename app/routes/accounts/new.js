import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AccountsNewRoute extends Route {
  @service session;
  @service router;

  async beforeModel(transition) {
    super.beforeModel(transition);

    if (!this.session.currentUserToken) {
      this.router.transitionTo('login');
    }
  }
}
