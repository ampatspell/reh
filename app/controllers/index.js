import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Controller.extend({

  strings: service(),
  off: false,
  on: true,

  actions: {
    save() {
      console.log('save');
    }
  }

});
