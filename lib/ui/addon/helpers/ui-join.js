import Ember from 'ember';

const {
  A
} = Ember;

export function uiJoin(params, hash) {
  let delimiter = hash.delimiter || '';
  return A(params).compact().join(delimiter);
}

export default Ember.Helper.helper(uiJoin);
