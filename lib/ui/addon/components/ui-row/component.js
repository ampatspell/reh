import Ember from 'ember';
import layout from './template';
import { notBlank } from 'reh/util/computed';

export default Ember.Component.extend({
  layout,
  classNameBindings: [ ':ui-row', 'hasTitle::no-title' ],

  title: null,
  hasTitle: notBlank('title'),

});
