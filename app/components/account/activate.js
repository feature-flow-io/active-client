import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AccountActivateComponent extends Component {
  @service store;
  @service notification;

  @action async activateAccount(accountId, event) {
    event.preventDefault();
    const account = await this.store.peekRecord('account', accountId);
    account.status = 'active';

    try {
      await account.save();
      this.notification.notify({
        message: 'Your account has been activated',
        type: 'success',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
