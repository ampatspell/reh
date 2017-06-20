import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('internal', { path: '/_dev' }, function() {
    this.route('ui', function() {
      this.route('calendar');
      this.route('form');
      this.route('checkbox');
      this.route('button');
      this.route('textfield');
      this.route('textarea');
      this.route('table');
    });
  });

});

export default Router;
