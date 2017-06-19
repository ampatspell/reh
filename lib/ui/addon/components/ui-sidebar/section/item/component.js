import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNameBindings: [ ':ui-sidebar-section-item', 'active:active' ],

  title: null,
  active: false

});
