import Ember from 'ember';

const {
  merge,
  A
} = Ember;

export default Ember.Service.extend({

  locale: 'en',
  fallbackLocale: 'en',

  values: null,

  deserialize(data) {
    let hash = Object.create(null);
    A(data.data).forEach(item => {
      let key = item.key;
      delete item.key;
      hash[key] = item;
    });
    return hash;
  },

  load() {
    return this.fetch().then(data => this.deserialize(data)).then(hash => this.set('values', hash));
  },

  interpolate({ string, args }) {
    return string.replace(/{([a-z]+)}/g, (m, key, c, d) => {
      let value = args[key];
      if(!value) {
        value = m;
      }
      return value;
    });
  },

  format(opts) {
    let { key, args, locale, fallbackLocale } = merge(this.getProperties('locale', 'fallbackLocale'), opts);

    if(!key) {
      return;
    }

    let values = this.get('values');
    if(!values) {
      return;
    }

    let string;

    let item = values[key];
    if(item) {
      string = item[locale];
      if(!string && locale !== fallbackLocale) {
        string = item[fallbackLocale];
      }
      if(!string) {
        string = key;
      }
    } else {
      string = key;
    }

    return this.interpolate({ string, args });
  }

});
