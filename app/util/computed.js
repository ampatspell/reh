import Ember from 'ember';

const {
  computed
} = Ember;

export const notBlank = key => {
  return computed(key, function() {
    let value = this.get(key);
    if(typeof value !== 'string') {
      return !!value;
    }
    return value.trim().length > 0;
  }).readOnly();
}
