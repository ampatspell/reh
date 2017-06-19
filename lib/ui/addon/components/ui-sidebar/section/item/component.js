import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNameBindings: [ ':ui-sidebar-section-item', 'active:active', 'icon::no-icon' ],

  icon: null,
  title: null,
  active: false

});
