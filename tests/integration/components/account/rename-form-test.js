import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | account/rename-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('account', {
      name: 'My account',
    });

    await render(hbs`<Account::RenameForm @account={{this.account}} />`);

    assert.dom('label').hasText('Account name');
    assert.dom('input[type="text"]').hasValue('My account');
    assert.dom('button[type="submit"]').exists();
  });
});
