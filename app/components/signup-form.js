import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SignupFormComponent extends Component {
  @service store;
  @service session;

  @tracked name = '';
  @tracked email = '';
  @tracked password = '';
  @tracked errors = [];

  @action async signup(event) {
    event.preventDefault();

    try {
      const response = await fetch('/v1/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            attributes: {
              name: this.name,
              email: this.email,
              password: this.password,
            },
          },
        }),
      });

      const { data } = await response.json();
      this.session.loginUserWithToken(data.attributes.auth_token);
    } catch (error) {
      this.errors = error.errors;
    }
  }

  @action update(type, event) {
    this[type] = event.target.value;
  }
}
