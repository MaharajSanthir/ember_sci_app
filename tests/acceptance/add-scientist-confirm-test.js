import { test } from 'qunit';
import moduleForAcceptance from 'scientistapp/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add scientist confirm');

test('visiting /add-scientist-confirm', function(assert) {
  server.createList('scientist', 5);

  visit('/add');
  fillIn('input.firstname', 'TestName');
  fillIn('input.lastname', 'TestLastName');
  fillIn('textarea.knownfor', 'Nothing');
  click('button.submit');

  andThen(function() {
    assert.equal(find('li.name').length, 6);
  });
});
