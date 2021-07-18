import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import MockSessionService from '../stubs/mock-session';

module('Acceptance | navigating with settings sidebar', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:session', MockSessionService);
    const user = this.server.create('user');
    this.owner.lookup('service:session').currentUserToken = user.token;
  });

  test('visiting /accounts/:id/settings', async function (assert) {
    const account = this.server.create('account');
    try {
      await visit(`/accounts/${account.id}/settings`);
    } catch (error) {
      console.log(error);
    }

    assert.equal(currentURL(), `/accounts/${account.id}/settings`);

    await click('a[data-test-id="general-settings-link"]');
    assert.equal(currentURL(), `/accounts/${account.id}/settings`);
  });

  test('visiting /accounts/:id/settings/domain', async function (assert) {
    const account = this.server.create('account');
    try {
      await visit(`/accounts/${account.id}/settings`);
    } catch (error) {
      console.log(error);
    }

    assert.equal(currentURL(), `/accounts/${account.id}/settings`);

    await click('a[data-test-id="custom-domain-link"]');
    assert.equal(currentURL(), `/accounts/${account.id}/settings/domain`);
  });

  test('visiting /accounts/:id/settings/collaborators', async function (assert) {
    const account = this.server.create('account');
    try {
      await visit(`/accounts/${account.id}/settings`);
    } catch (error) {
      console.log(error);
    }

    assert.equal(currentURL(), `/accounts/${account.id}/settings`);

    await click('a[data-test-id="team-members-link"]');
    assert.equal(
      currentURL(),
      `/accounts/${account.id}/settings/collaborators`
    );
  });
});
