import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import click from '@ember/test-helpers/dom/click';

module('Integration | Component | dropdown', function (hooks) {
  setupRenderingTest(hooks);

  test('it shows and hides the dropdown-menu', async function (assert) {
    await render(hbs`
      <Dropdown as |isHidden actions|>
        <button type="button" {{on "click" actions.toggleVisibility}}>Click</button>

        <div id="container" hidden={{isHidden}}>hello world</div>
      </Dropdown>
    `);

    await click('button');
    assert.false(this.element.querySelector('div#container').hidden);

    await click('button');
    assert.true(this.element.querySelector('div#container').hidden);
  });

  test('it renders the classes', async function (assert) {
    await render(hbs`
      <Dropdown @class="dropdown" as |isHidden actions|>
        <button type="button" {{on "click" actions.toggleVisibility}}>Click</button>

        <div id="container" hidden={{isHidden}}>hello world</div>
      </Dropdown>
    `);

    assert.dom(this.element.querySelector('.dropdown')).exists();
  });
});
