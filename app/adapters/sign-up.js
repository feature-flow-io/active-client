import ApplicationAdapter from './application';

export default class SignUpAdapter extends ApplicationAdapter {
  pathForType() {
    return 'users';
  }
}
