import Service from '@ember/service';
import { inject as service } from '@ember/service';

const AUTH_TOKEN = 'feature-flow';

export default class SessionService extends Service {
  @service cookies;

  loginUserWithToken(token) {
    this.cookies.write(AUTH_TOKEN, token);
  }

  get currentUserToken() {
    return this.cookies.read(AUTH_TOKEN);
  }
}
