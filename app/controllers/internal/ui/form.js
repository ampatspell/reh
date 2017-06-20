import Ember from 'ember';

const {
  computed
} = Ember;

const Model = Ember.Object.extend({
  fistName: null,
  lastName: null,
  socialSecurityNumber: null,
  isReturning: false,
  diagnosis: null,
});

export default Ember.Controller.extend({

  model: computed(function() {
    return Model.create();
  }).readOnly(),

  actions: {
    save() {
    },
    cancel() {
    }
  }

});
