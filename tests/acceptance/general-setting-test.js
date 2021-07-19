import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import MockSessionService from '../stubs/mock-session';

module('Acceptance | general setting', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:session', MockSessionService);
    const user = this.server.create('user');
    this.owner.lookup('service:session').currentUserToken = user.token;
  });

  test('renaming the account', async function (assert) {
    const account = this.server.create('account');
    await visit(`/accounts/${account.id}/settings`);

    assert.equal(currentURL(), `/accounts/${account.id}/settings`);
    const submitBtn = find('button[data-test-id="rename-button"]');

    assert.equal(find('#account-name').value, account.name);
    assert.true(submitBtn.disabled);

    await fillIn('#account-name', 'My new updated account');
    assert.false(submitBtn.disabled);
    await click(submitBtn);
    assert.equal(
      this.server.db.accounts.find(account.id).name,
      'My new updated account'
    );
  });
});
