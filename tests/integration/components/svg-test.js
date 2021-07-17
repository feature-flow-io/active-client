import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | svg', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the specified size', async function (assert) {
    this.set('size', '32px');

    await render(hbs`<Svg @icon="external-link" @size={{this.size}} />`);

    assert.equal(
      this.element.querySelector('svg').getAttribute('width'),
      '32px'
    );
  });

  test('it renders the default size', async function (assert) {
    await render(hbs`<Svg @icon="external-link" />`);

    assert.equal(
      this.element.querySelector('svg').getAttribute('width'),
      '18px'
    );
  });

  test('it has the class name', async function (assert) {
    await render(hbs`<Svg @icon="external-link" />`);

    assert.true(this.element.querySelector('svg').classList.contains('remix'));
  });
});
