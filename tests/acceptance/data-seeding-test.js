import { test } from 'qunit';
import moduleForAcceptance from 'scientistapp/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | data seeding');

test('Populate Database Check - visiting / check if data exist from mirage seeding', function(assert) {
  visit('/');
  server.createList('scientist',5);

  andThen(function() {
    assert.equal(find('li.name').length, 5);
  });
});
