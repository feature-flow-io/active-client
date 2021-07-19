import { module, test } from 'qunit';
import { visit, currentURL, find, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import MockSessionService from '../stubs/mock-session';

module('Acceptance | account activation', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:session', MockSessionService);
    const user = this.server.create('user');
    this.owner.lookup('service:session').currentUserToken = user.token;
  });

  test('it activates the account', async function (assert) {
    const account = this.server.create('account', {
      status: 'inactive',
    });
    await visit(`/accounts/${account.id}/settings`);

    assert.equal(currentURL(), `/accounts/${account.id}/settings`);

    await click(find('button[data-test-id="account-activate-btn"]'));
    assert.equal(this.server.db.accounts.find(account.id).status, 'active');
  });
});
