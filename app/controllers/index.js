import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Controller.extend({

  strings: service(),

  actions: {
    save() {
      console.log('save');
    }
  }

});
