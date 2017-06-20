import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    transitionToRoute(name) {
      this.get('router').transitionTo(name);
    }
  }

});
