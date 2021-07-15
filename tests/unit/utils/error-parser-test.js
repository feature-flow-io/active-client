import errorParser from 'active-client/utils/error-parser';
import { module, test } from 'qunit';

module('Unit | Utility | error-parser', function () {
  test('it returns the error message if errors is present', function (assert) {
    const errors = [
      {
        source: { pointer: '/data/attributes/name' },
        type: 'name',
        detail: 'Name cannot be blank',
      },
    ];

    assert.equal(errorParser({ errors, type: 'name' }), 'Name cannot be blank');
  });

  test('it returns an empty string if if errors is empty', function (assert) {
    assert.equal(errorParser({ errors: [], type: 'name' }), '');
  });
});
