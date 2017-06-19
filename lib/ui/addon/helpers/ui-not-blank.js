import Ember from 'ember';

export function uiNotBlank(params) {
  let [ value ] = params;
  if(typeof value === 'string') {
    return value.trim().length > 0;
  }
  return !!value;
}

export default Ember.Helper.helper(uiNotBlank);
