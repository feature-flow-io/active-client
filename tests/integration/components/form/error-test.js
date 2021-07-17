import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form/error', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the error', async function (assert) {
    this.set('errors', [
      {
        source: { pointer: '/data/attributes/name' },
        type: 'name',
        detail: 'Name cannot be blank',
      },
    ]);

    await render(
      hbs`<Form::Error @errors={{this.errors}} @errorType="name" />`
    );

    assert.dom(this.element).hasText('Name cannot be blank');
  });
});
