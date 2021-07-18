import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import MockSessionService from '../stubs/mock-session';

module('Acceptance | account creation', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:session', MockSessionService);
    const user = this.server.create('user');
    this.owner.lookup('service:session').currentUserToken = user.token;
  });

  test('it redirects to account show page after creating an account', async function (assert) {
    await visit('/accounts/new');

    assert.equal(currentURL(), '/accounts/new');
    const submitBtn = find('button[data-test-id="new-account-button"]');

    assert.true(submitBtn.disabled);

    await fillIn('#account-name', 'My account');
    await fillIn('#subdomain', 'my-account');
    assert.false(submitBtn.disabled);
    await click(submitBtn);
    const account = this.server.db.accounts[0];
    assert.equal(currentURL(), `/accounts/${account.id}`);
  });
});
