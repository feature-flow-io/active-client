import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | subhead', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the header', async function (assert) {
    this.set('title', 'hello world');
    this.set('description', 'subhead description');

    await render(
      hbs`<Subhead @title={{this.title}} @description={{this.description}} />`
    );

    assert.dom(this.element).includesText('hello world');
    assert.dom(this.element).includesText('subhead description');
  });

  test('it renders the danger subhead', async function (assert) {
    await render(hbs`<Subhead @title={{this.title}} @danger="true" />`);

    assert.dom(this.element.querySelector('.subhead-heading--danger')).exists();
  });
});
