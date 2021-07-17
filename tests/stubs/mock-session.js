import Service from '@ember/service';

export default class MockSessionService extends Service {
  currentUserToken = null;

  loginUserWithToken(token) {
    this.currentUserToken = token;
  }
}
