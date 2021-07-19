import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | confirmable', function (hooks) {
  setupRenderingTest(hooks);

  test('it enables the button only when confirmed', async function (assert) {
    await render(hbs`
      {{!-- template-lint-disable require-input-label --}}
      <input type="text" id="input" {{confirmable "hello" "my-button"}} />
      <button type="button" id="my-button" disabled>Click</button>
    `);

    const submitBtn = find('#my-button');

    assert.true(submitBtn.disabled);
    await fillIn('#input', 'hello');
    assert.false(submitBtn.disabled);
  });
});
