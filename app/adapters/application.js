import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  namespace = 'v1';

  get headers() {
    const headers = {};
    headers['Authorization'] = `Bearer ${this.session.currentUserToken}`;

    return headers;
  }
}
