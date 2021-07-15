import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {
  @service store;
  @service session;

  @tracked email = '';
  @tracked password = '';
  @tracked errors = [];

  @action async login(event) {
    event.preventDefault();
    const authRecord = this.store.createRecord('session', {
      email: this.email,
      password: this.password,
    });

    try {
      const response = await authRecord.save();
      this.session.loginUserWithToken(response.token);
    } catch (error) {
      this.errors = error.errors;
      console.log(this.errors);
    }
  }

  @action update(type, event) {
    this[type] = event.target.value;
  }

  get isDisabled() {
    const fields = [this.email, this.password];
    return fields.some((field) => field.length === 0);
  }
}
