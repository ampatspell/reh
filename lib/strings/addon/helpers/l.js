import Ember from 'ember';

const {
  inject: { service },
  observer,
  run: { cancel, next }
} = Ember;

export default Ember.Helper.extend({

  strings: service(),

  compute(params, args) {
    let [ key ] = params;
    return this.get('strings').format({ key, args });
  },

  localeDidChange: observer('strings.locale', function() {
    cancel(this.__recompute);
    this.__recompute = next(() => this.recompute());
  }),

  willDestroy() {
    this._super();
    cancel(this.__recompute);
  }

});
