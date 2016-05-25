import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-edit-del-button', 'Integration | Component | list edit del button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{list-edit-del-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#list-edit-del-button}}
      template block text
    {{/list-edit-del-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
