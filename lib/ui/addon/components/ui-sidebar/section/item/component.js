import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNameBindings: [ ':ui-sidebar-section-item', 'active:active', 'icon::no-icon', 'action:has-action' ],

  icon: null,
  title: null,
  active: false,

  click() {
    if(this.attrs.action) {
      this.attrs.action();
    }
  }

});
