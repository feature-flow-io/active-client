import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | field-error', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the errors', async function (assert) {
    const errors = [
      {
        source: { pointer: '/data/attributes/name' },
        type: 'name',
        detail: 'Name cannot be blank',
      },
    ];

    this.set('errors', errors);
    this.set('type', 'name');

    await render(hbs`{{field-error this.errors type=this.type}}`);

    assert.dom(this.element).hasText('Name cannot be blank');
  });
});
