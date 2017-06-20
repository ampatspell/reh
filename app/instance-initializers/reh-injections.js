export default {
  name: 'reh:injections',
  initialize(app) {
    app.inject('controller', 'router', 'service:router');
    app.inject('component', 'router', 'service:router');
  }
};
