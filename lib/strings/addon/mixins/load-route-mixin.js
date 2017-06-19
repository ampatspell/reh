import Ember from 'ember';

const {
  inject: { service },
  RSVP: { resolve }
} = Ember;

export default Ember.Mixin.create({

  strings: service(),

  beforeModel() {
    return resolve(this._super(...arguments)).then(() => {
      return this.get('strings').load();
    });
  }

});
