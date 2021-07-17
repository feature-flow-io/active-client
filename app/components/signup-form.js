import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SignupFormComponent extends Component {
  @service store;
  @service session;
  @service router;

  @tracked name = '';
  @tracked email = '';
  @tracked password = '';
  @tracked errors = [];

  @action async signup(event) {
    event.preventDefault();

    const userRecord = this.store.createRecord('user', {
      name: this.name,
      email: this.email,
      password: this.password,
    });

    try {
      const response = await userRecord.save();
      this.session.loginUserWithToken(response.token);
      this.router.transitionTo('accounts.new');
    } catch (error) {
      this.errors = error.errors;
    }
  }

  @action update(type, event) {
    this[type] = event.target.value;
  }

  get isDisabled() {
    const fields = [this.name, this.email, this.password];
    return fields.some((field) => field.length === 0);
  }
}
