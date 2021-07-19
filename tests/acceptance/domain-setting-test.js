import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import MockSessionService from '../stubs/mock-session';

module('Acceptance | domain setting', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:session', MockSessionService);
    const user = this.server.create('user');
    this.owner.lookup('service:session').currentUserToken = user.token;
  });

  test('updating cname record', async function (assert) {
    const account = this.server.create('account');
    try {
      await visit(`/accounts/${account.id}/settings/domain`);
    } catch (error) {
      console.log(error);
    }

    assert.equal(currentURL(), `/accounts/${account.id}/settings/domain`);
    assert.equal(find('#account-cname').value, account.cname);

    await fillIn('#account-cname', 'domain.my-domain.com');
    await click('button[data-test-id="update-cname"]');
    assert.equal(
      this.server.db.accounts.find(account.id).cname,
      'domain.my-domain.com'
    );
  });
});
