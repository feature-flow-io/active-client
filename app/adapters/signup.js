import ApplicationAdapter from './application';

export default class SignupAdapter extends ApplicationAdapter {
  pathForType() {
    return 'users';
  }
}
