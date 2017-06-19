export default {
  name: 'reh:dev',
  initialize(app) {
    let store = app.lookup('service:store');
    window.store = store;
  }
};
