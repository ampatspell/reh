import Ember from 'ember';

const {
  computed,
  merge
} = Ember;

const routes = [
  { icon: 'id-card-o', title: 'Form', route: 'form' },
  { icon: 'square-o', title: 'Button', route: 'button' },
  { icon: 'check-square-o', title: 'Checkbox', route: 'checkbox' },
  { icon: 'bars', title: 'Textfield', route: 'textfield' },
  { icon: 'th-large', title: 'Textarea', route: 'textarea' },
  { icon: 'calendar', title: 'Calendar', route: 'calendar' },
];

const Route = Ember.Object.extend({

  title: null,
  route: null,

  absoluteRoute: computed('route', function() {
    return `internal.ui.${this.get('route')}`;
  }).readOnly(),

  isActive: computed('absoluteRoute', 'router.currentRouteName', function() {
    return this.get('absoluteRoute') === this.get('router.currentRouteName');
  }).readOnly(),

});

export default Ember.Controller.extend({

  routes: computed(function() {
    let router = this.get('router');
    return routes.map(props => {
      return Route.create(merge({ router }, props));
    });
  }).readOnly(),

  actions: {
    transitionTo(name) {
      this.get('router').transitionTo(name);
    }
  }

});
