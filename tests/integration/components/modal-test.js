import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Modal>
        <:trigger>
          <button type="button">Click</button>
        </:trigger>

        <:body>
          <h2>hello world</h2>
        </:body>
      </Modal>
    `);

    assert.dom(this.element).hasText('Click');
  });
});
