import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SignupFormComponent extends Component {
  @service store;

  @tracked name = '';
  @tracked email = '';
  @tracked password = '';
  @tracked errors = [];

  @action async signup(event) {
    event.preventDefault();

    try {
      const userRecord = await this.store.createRecord('sign-up', {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      await userRecord.save();
    } catch (error) {
      this.errors = error.errors;
    }
  }

  @action update(type, event) {
    this[type] = event.target.value;
  }
}
