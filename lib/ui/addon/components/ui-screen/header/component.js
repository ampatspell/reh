import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNameBindings: [ ':ui-screen-header' ],
});
