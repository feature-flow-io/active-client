import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import MockSessionService from '../stubs/mock-session';

module('Acceptance | signup', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:session', MockSessionService);
  });

  test('redirects to accounts/new page after signing up', async function (assert) {
    await visit('/signup');

    assert.equal(currentURL(), '/signup');
    assert.true(find('button[data-test-id="signup-button"]').disabled);

    await fillIn('#name', 'John Doe');
    await fillIn('#email', 'john@yaoo.com');
    await fillIn('#password', 'specialsecret');
    assert.false(find('button[data-test-id="signup-button"]').disabled);
    await click('button[data-test-id="signup-button"]');

    const user = this.server.db.users[0];

    assert.equal(
      this.owner.lookup('service:session').currentUserToken,
      user.token
    );

    assert.equal(currentURL(), '/accounts/new');
  });

  test('it has the login link', async function (assert) {
    await visit('/signup');

    const url = find('a[data-test-id="login-link"]');
    await click(url);
    assert.equal(currentURL(), '/login');
  });
});
