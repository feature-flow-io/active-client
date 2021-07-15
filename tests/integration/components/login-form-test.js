import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | login-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<LoginForm />`);

    assert.dom('#email').exists();
    assert.dom('#password').exists();
    assert.dom('button[type="submit"]').exists();
  });
});
