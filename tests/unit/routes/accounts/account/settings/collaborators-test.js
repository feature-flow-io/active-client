import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module(
  'Unit | Route | accounts/account/settings/collaborators',
  function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
      let route = this.owner.lookup(
        'route:accounts/account/settings/collaborators'
      );
      assert.ok(route);
    });
  }
);
