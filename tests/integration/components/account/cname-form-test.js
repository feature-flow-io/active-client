import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | account/cname-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('account', {
      cname: 'subdomain',
    });

    await render(hbs`<Account::CnameForm @account={{this.account}} />`);

    assert.dom('label').hasText('CNAME');
    assert.dom('input[type="text"]').hasValue('subdomain');
    assert.dom('button[type="submit"]').exists();
  });
});
