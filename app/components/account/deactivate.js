import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AccountDeactivateComponent extends Component {
  @service store;
  @service notification;

  @action async deactivateAccount(accountId, event) {
    event.preventDefault();
    const account = await this.store.peekRecord('account', accountId);
    account.status = 'inactive';

    try {
      await account.save();
      this.notification.notify({
        message: 'Your account has been deactivated',
        type: 'success',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
