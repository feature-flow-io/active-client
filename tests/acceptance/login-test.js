import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import MockSessionService from '../stubs/mock-session';

module('Acceptance | login', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:session', MockSessionService);
  });

  test('stores the user token', async function (assert) {
    const user = this.server.create('session');
    await visit('/login');

    assert.equal(currentURL(), '/login');

    await fillIn('#email', user.email);
    await fillIn('#password', user.password);
    await click('button[data-test-id="login-button"]');

    assert.equal(
      this.owner.lookup('service:session').currentUserToken,
      user.token
    );
  });
});
