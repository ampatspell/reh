import Ember from 'ember';

const {
  merge,
  A,
  assert
} = Ember;

export default Ember.Service.extend({

  locale: null,
  availableLocales: null,
  fallbackLocale: null,
  values: null,

  deserialize(data) {
    let values = Object.create(null);
    A(data.data).forEach(item => {
      let key = item.key;
      delete item.key;
      values[key] = item;
    });

    let {
      available: availableLocales,
      fallback: fallbackLocale
    } = data.settings;

    return {
      values,
      availableLocales,
      fallbackLocale,
      locale: fallbackLocale
    };
  },

  load() {
    return this.fetch().then(data => this.deserialize(data)).then(hash => this.setProperties(hash));
  },

  interpolate({ string, args }) {
    return string.replace(/{([a-z]+)}/g, (m, key) => {
      let value = args[key];
      if(!value) {
        value = m;
      }
      return value;
    });
  },

  format(opts) {
    assert('call strings.load before using', !!this.get('locale'));

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
