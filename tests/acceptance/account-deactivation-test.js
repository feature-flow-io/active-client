import { module, test } from 'qunit';
import { visit, currentURL, find, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import MockSessionService from '../stubs/mock-session';

module('Acceptance | account deactivation', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:session', MockSessionService);
    const user = this.server.create('user');
    this.owner.lookup('service:session').currentUserToken = user.token;
  });

  test('it deactivates the account', async function (assert) {
    const account = this.server.create('account');
    await visit(`/accounts/${account.id}/settings`);

    assert.equal(currentURL(), `/accounts/${account.id}/settings`);

    await click('button[data-test-id="account-deactivate-modal-btn"]');
    const input = find('#account-deactivate-confirm-field');
    const submitBtn = find('#account-deactivate-submit-btn');

    assert.true(submitBtn.disabled);

    await fillIn(input, account.name);
    assert.false(submitBtn.disabled);
    await click(submitBtn);
    assert.equal(this.server.db.accounts.find(account.id).status, 'inactive');
  });
});
