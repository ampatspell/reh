import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNameBindings: [ ':ui-button', 'disabled:disabled', 'action::no-action' ],
  tagName: 'button',

  title: null,

  click() {
    if(this.get('disabled')) {
      return;
    }
    if(this.attrs.action) {
      this.attrs.action();
    }
  }

});
