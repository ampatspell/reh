import Ember from 'ember';

const {
  inject: { service },
  observer
} = Ember;

export default Ember.Helper.extend({

  strings: service(),

  compute(params) {
    let [ key, ...args ] = params;
    return this.get('strings').format({ key, args });
  },

  localeDidChange: observer('strings.locale', function() {
    this.recompute();
  }),

});
