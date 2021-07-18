import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | account/activate', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders if account status is inactive', async function (assert) {
    this.set('account', {
      status: 'inactive',
    });

    await render(hbs`<Account::Activate @account={{this.account}} />`);

    assert.dom('button[type="button"]').exists();
  });

  test('it does not render if account status is active', async function (assert) {
    this.set('account', {
      status: 'active',
    });

    await render(hbs`<Account::Activate @account={{this.account}} />`);

    assert.dom('button[type="button"]').doesNotExist();
  });
});
