
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-not-blank', 'helper:ui-not-blank', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{ui-not-blank inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

