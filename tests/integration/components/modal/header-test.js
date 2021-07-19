import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | modal/header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('title', 'Modal header');
    this.set('onClose', function () {
      find('h2.box-title').textContent = 'Hi there!';
    });

    await render(
      hbs`<Modal::Header @title={{this.title}} @onClose={{this.onClose}} />`
    );

    assert.dom('h2.box-title').hasText('Modal header');

    await click('button[type="button"]');
    assert.dom('h2.box-title').hasText('Hi there!');
  });
});
