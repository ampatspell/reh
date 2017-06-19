import Ember from 'ember';
import Service from 'strings/strings/service';
import payload from './payload';

const {
  RSVP: { resolve }
} = Ember;

export default Service.extend({

  fetch() {
    return resolve(payload);
  }

});
