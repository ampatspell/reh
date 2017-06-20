import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNameBindings: [ ':ui-checkbox', 'disabled:disabled' ],

  title: null,
  disabled: false,
  value: null,

});
